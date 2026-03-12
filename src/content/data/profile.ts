import rawProfile from '@content/profile/profile.json'
import type { SupportedLocale } from '../locale'

export interface ProfileTextContent {
  description: string
  exportDescription: string
}

export interface ProfileIdentity {
  fullName: string
  email: string
  linkedinUrl: string
  githubUrl: string
  portfolioUrl: string
}

interface ProfileData {
  identity: ProfileIdentity
  content: {
    en: ProfileTextContent
    fr: ProfileTextContent
  }
}

const profileData = rawProfile as ProfileData

export const getProfileIdentity = (): ProfileIdentity => profileData.identity

export const getProfileContent = (locale: SupportedLocale): ProfileTextContent => (
  locale === 'fr' ? profileData.content.fr : profileData.content.en
)
