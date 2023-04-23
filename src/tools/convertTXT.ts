import { parseData } from './parseData'

interface IBadge {
  code: string
  name?: string
  description?: string
}

const badgePattern = /^badge_(?:name|desc)_([^=]+)/gim
const descriptionPattern = /^badge_desc_(\s*\w+)/
const namePattern = /^badge_name_(\s*\w+)/

export const convertTXT = async (path: string, data: string): Promise<void> => {
  const badges: IBadge[] = []

  const lines = data.split(/\r?\n/)

  for (const line of lines) {
    const [key, value] = line.split('=')
    const badge = key.match(badgePattern)

    if (badge != null) {
      if (key.match(namePattern) != null) {
        const badgeCode = key.match(namePattern)?.[1] as string
        const existingBadge = badges.filter((badge) => {
          return badge.code === badgeCode
        })[0]

        if (Boolean(existingBadge)) {
          const index = badges.indexOf(existingBadge)
          badges[index].name = value
        } else {
          badges.push({ code: badgeCode, name: value })
        }
      } else if (key.match(descriptionPattern) != null) {
        const badgeCode = key.match(descriptionPattern)?.[1] as string
        const existingBadge = badges.filter((badge) => {
          return badge.code === badgeCode
        })[0]

        if (Boolean(existingBadge)) {
          const index = badges.indexOf(existingBadge)
          badges[index].description = value
        } else {
          badges.push({ code: badgeCode, description: value })
        }
      }

      lines.splice(lines.indexOf(line), 1)
    }
  }

  return await parseData(path, 'Badges', badges)
}
