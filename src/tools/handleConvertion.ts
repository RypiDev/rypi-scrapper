import { ResponseType } from '@tauri-apps/api/http'

import { GAME_ENDPOINTS, client } from '../config/Endpoints'
import type { DomainTypes } from '../types/Domain'
import { fetchGamedata } from './fetchGamedata'
import type { StateTypes } from '../types/global'

export const handleConvertion = async (
  domain: DomainTypes,
  callback: (message: string, state: StateTypes) => void,
  assetsOption = false
): Promise<void> => {
  if (!assetsOption) {
    callback('Converting Gamedata configuration...', 'loading')

    await Promise.all(
      GAME_ENDPOINTS(domain).map(async (endpoint) => {
        await client
          .get(endpoint.src, { responseType: ResponseType.Text })
          .then(async ({ data }) => {
            return await fetchGamedata(data as string, endpoint)
          })
          .catch((error) => {
            console.error(error)
            return callback(error, 'error')
          })
      })
    )

    callback('Converting shockwave files...', 'loading')
  } else {
    /* ASSETS_ENDPOINTS(domain).map((endpoint) => {
      client.get()
    }) */
  }
}
