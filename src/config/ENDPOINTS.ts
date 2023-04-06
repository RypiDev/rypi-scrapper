import { getClient, ResponseType } from '@tauri-apps/api/http'

import type { DomainTypes, GameEndPointsTypes } from '../types'

const PROD_VERSION_REGEX = /(production-[^/]+)/im
const STABLE_PROD_VERSION = 'PRODUCTION-202303282207-162719871'

export let PROD_VERSION: string | undefined

const HABBO_URL = (domain: DomainTypes): string => {
  return `https://www.habbo.${domain}`
}

const HABBO_IMAGES = `https://images.habbo.com/gordon/${
  PROD_VERSION ?? STABLE_PROD_VERSION
}`

export const client = await getClient()
await client
  .get(`${HABBO_URL('com')}/gamedata/external_variables/0`, {
    responseType: ResponseType.Text
  })
  .then(({ data }) => {
    return (PROD_VERSION = (data as string).match(PROD_VERSION_REGEX)?.[0])
  })

export const GAME_ENDPOINTS: GameEndPointsTypes = (domain) => {
  return [
    {
      src: `${HABBO_URL(domain)}/gamedata/figuredata/0`,
      convert: 'XML',
      fileName: 'FigureData'
    }
    /* {
      src: `${HABBO_IMAGES}/figuremap.xml`,
      convert: 'XML',
      fileName: 'FigureMap'
    },
    {
      src: `${HABBO_URL(domain)}/gamedata/furnidata_json/0`,
      fileName: 'FurniData'
    },
    {
      src: `${HABBO_URL(domain)}/gamedata/productdata_json/0`,
      fileName: 'ProductData'
    },
    {
      src: `${HABBO_IMAGES}/effectmap.xml`,
      convert: 'XML',
      fileName: 'EffectMap'
    },
    {
      src: `${HABBO_URL(domain)}/gamedata/external_variables/0`,
      convert: 'TXT',
      fileName: 'ExternalTexts'
    } */
  ]
}

export const ASSETS_ENDPOINTS = (domain: DomainTypes): string[] => {
  return [`${HABBO_URL(domain)}/`]
}
