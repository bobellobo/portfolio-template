import rawProfile from '@content/profile/profile.json'
import type { SupportedLocale } from '../locale'

const contentImages = import.meta.glob(
  '../../../content/**/*.{avif,jpg,jpeg,png,webp,svg,gif}',
  { eager: true, import: 'default' }
)

export interface ProfileTextContent {
  description: string
  exportDescription: string
}

export interface ProfileIdentity {
  fullName: string
  photo?: string
  email: string
  linkedinUrl?: string
  githubUrl?: string
  portfolioUrl: string
}

export interface ContactLink {
  label: string
  url: string
  display?: string
}

interface ContactLinkTranslations {
  en: string
  fr: string
}

interface ProfileContactLink {
  label: string | ContactLinkTranslations
  url: string
  display?: string
  includeInContactSection?: boolean
  includeInExport?: boolean
}

interface ProfileData {
  identity: ProfileIdentity
  contactLinks?: ProfileContactLink[]
  content: {
    en: ProfileTextContent
    fr: ProfileTextContent
  }
}

const profileData = rawProfile as ProfileData

const isNonEmptyText = (value: unknown): value is string => (
  typeof value === 'string' && value.trim().length > 0
)

const getTranslatedLabel = (
  label: string | ContactLinkTranslations,
  locale: SupportedLocale
): string => {
  if (typeof label === 'string') {
    return label
  }

  return locale === 'fr' ? label.fr : label.en
}

const getLegacyContactLinks = (locale: SupportedLocale): ContactLink[] => {
  const links: ContactLink[] = []

  if (isNonEmptyText(profileData.identity.linkedinUrl)) {
    links.push({
      label: 'LinkedIn',
      url: profileData.identity.linkedinUrl
    })
  }

  if (isNonEmptyText(profileData.identity.githubUrl)) {
    links.push({
      label: 'GitHub',
      url: profileData.identity.githubUrl
    })
  }

  if (isNonEmptyText(profileData.identity.email)) {
    links.push({
      label: locale === 'fr' ? 'Email' : 'Email',
      url: `mailto:${profileData.identity.email}`,
      display: profileData.identity.email
    })
  }

  return links
}

const getConfiguredContactLinks = (locale: SupportedLocale): ContactLink[] => {
  if (!Array.isArray(profileData.contactLinks) || profileData.contactLinks.length === 0) {
    return []
  }

  return profileData.contactLinks
    .filter((item) => isNonEmptyText(item.url))
    .map((item) => ({
      label: getTranslatedLabel(item.label, locale),
      url: item.url,
      display: isNonEmptyText(item.display) ? item.display : undefined
    }))
}

export const getProfileIdentity = (): ProfileIdentity => profileData.identity

export const getProfilePhotoUrl = (): string => {
  const photoPath = profileData.identity.photo
  if (!photoPath) return ''
  const key = `../../../content/${photoPath}`
  return (contentImages[key] as string) || ''
}

export const getContactLinks = (locale: SupportedLocale): ContactLink[] => {
  const configuredLinks = getConfiguredContactLinks(locale)
  return configuredLinks.length > 0 ? configuredLinks : getLegacyContactLinks(locale)
}

export const getContactLinksForContactSection = (locale: SupportedLocale): ContactLink[] => {
  if (!Array.isArray(profileData.contactLinks) || profileData.contactLinks.length === 0) {
    return getLegacyContactLinks(locale)
  }

  return profileData.contactLinks
    .filter((item) => item.includeInContactSection !== false)
    .filter((item) => isNonEmptyText(item.url))
    .map((item) => ({
      label: getTranslatedLabel(item.label, locale),
      url: item.url,
      display: isNonEmptyText(item.display) ? item.display : undefined
    }))
}

export const getContactLinksForExport = (locale: SupportedLocale): ContactLink[] => {
  if (!Array.isArray(profileData.contactLinks) || profileData.contactLinks.length === 0) {
    return getLegacyContactLinks(locale)
  }

  return profileData.contactLinks
    .filter((item) => item.includeInExport !== false)
    .filter((item) => isNonEmptyText(item.url))
    .map((item) => ({
      label: getTranslatedLabel(item.label, locale),
      url: item.url,
      display: isNonEmptyText(item.display) ? item.display : undefined
    }))
}

export const getProfileContent = (locale: SupportedLocale): ProfileTextContent => (
  locale === 'fr' ? profileData.content.fr : profileData.content.en
)
