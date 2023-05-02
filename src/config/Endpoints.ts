import { getClient, ResponseType } from '@tauri-apps/api/http'

import { DomainTypes } from './Domain'
import type { GamedataEndpoints } from '../tools/rusty'

const PROD_VERSION_REGEX = /(production-[^/]+)/im
const STABLE_PROD_VERSION = 'PRODUCTION-202304181630-471782382'

export let PROD_VERSION: string | undefined

const HABBO_URL = (domain: DomainTypes): string => {
  return `https://www.habbo.${domain}`
}

export const HABBO_GORDON_URL = `https://images.habbo.com/gordon/${PROD_VERSION ?? STABLE_PROD_VERSION}`

export const client = await getClient()
await client
  .get(`${HABBO_URL(DomainTypes.English)}/gamedata/external_variables/0`, {
    responseType: ResponseType.Text
  })
  .then(({ data }) => {
    return (PROD_VERSION = (data as string).match(PROD_VERSION_REGEX)?.[0])
  })

export const GAMEDATA_ENDPOINTS = async (domain: DomainTypes): Promise<GamedataEndpoints[]> => {
  return [
    {
      src: `${HABBO_URL(domain)}/gamedata/furnidata_json/0`,
      convert: 'JSON',
      file_name: 'FurniData'
    }
  ]
}

export const ASSETS_ENDPOINTS = (domain: DomainTypes): string[] => {
  return [`${HABBO_URL(domain)}/`]
}
