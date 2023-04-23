import { ResponseType } from '@tauri-apps/api/http'

import { GAME_ENDPOINTS, client } from '../config/Endpoints'
import type { DomainTypes } from '../types/Domain'
import { fetchGamedataConfig } from './fetchGamedataConfig'
import type { ConvertionHandler } from '../types/global'

export const handleConvertion = async (
  domain: DomainTypes,
  callback: ConvertionHandler,
  assetsOption = false
): Promise<void> => {
  if (!assetsOption) {
    callback('Initializing Gamedata configuration...', 'loading')

    await Promise.all(
      GAME_ENDPOINTS(domain).map(async (endpoint) => {
        await client
          .get(endpoint.src, { responseType: ResponseType.Text })
          .then(async ({ data }) => {
            return await fetchGamedataConfig(data as string, endpoint)
          })
          .catch((error) => {
            console.error(error)
            return callback(error, 'error')
          })
      })
    )

    callback('Converting shockwave files...', 'loading')

    // fetch, read and convert the files from the production folder in the user downloads' folder
    // write the files into a seperate folder
  } else {
    /* ASSETS_ENDPOINTS(domain).map((endpoint) => {
      client.get()
    }) */
  }
}
