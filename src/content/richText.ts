export interface RichTextSegment {
  type: 'text' | 'link'
  text: string
  href?: string
}

const LINK_TAG_REGEX = /\{\{link:([^|}]+)\|([^}]+)\}\}/g
const SAFE_LINK_REGEX = /^(https?:\/\/|mailto:|tel:|\/)/i

const isSafeLink = (href: string): boolean => SAFE_LINK_REGEX.test(href.trim())

export const parseRichText = (text: string): RichTextSegment[] => {
  const segments: RichTextSegment[] = []
  let cursor = 0

  for (const match of text.matchAll(LINK_TAG_REGEX)) {
    const matchIndex = match.index ?? 0
    const matchText = match[0]
    const href = (match[1] ?? '').trim()
    const label = (match[2] ?? '').trim()

    if (matchIndex > cursor) {
      segments.push({
        type: 'text',
        text: text.slice(cursor, matchIndex)
      })
    }

    if (href && label && isSafeLink(href)) {
      segments.push({
        type: 'link',
        text: label,
        href
      })
    } else {
      segments.push({
        type: 'text',
        text: matchText
      })
    }

    cursor = matchIndex + matchText.length
  }

  if (cursor < text.length) {
    segments.push({
      type: 'text',
      text: text.slice(cursor)
    })
  }

  return segments.length > 0 ? segments : [{ type: 'text', text }]
}
