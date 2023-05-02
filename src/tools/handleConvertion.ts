import { ResponseType } from '@tauri-apps/api/http'

import { GAMEDATA_ENDPOINTS, client } from '../config/Endpoints'
import type { ConvertionHandler } from '../types'
import type { DomainTypes } from '../config/Domain'
import { parseData } from './parseData'
import { Convertion } from '../config/Convertion'
import { downloadGamedata } from './rusty'

export const handleConvertion = async (
  domain: DomainTypes,
  callback: ConvertionHandler,
  assetsOption = false
): Promise<void> => {
  if (!assetsOption) {
    callback('Initializing Gamedata configuration...', 'loading')

    const gameData = await GAMEDATA_ENDPOINTS(domain)

    await Promise.all(
      gameData.map(async (endpoint) => {
        if (endpoint.src.startsWith('http')) {
          return await client
            .get(endpoint.src, { responseType: ResponseType.Text })
            .then(async ({ data }) => {
              return await downloadGamedata(data as string, endpoint).catch((error) => {
                return console.log(error)
              })
            })
            .catch((error) => {
              return callback(error, 'error')
            })
        } else {
          return await parseData(Convertion.gamedataDir, endpoint.file_name, endpoint.src)
        }
      })
    )

    // callback('Converting shockwave files...', 'loading')

    // fetch, read and convert the files from the production folder in the user downloads' folder
    // write the files into a seperate folder
  } else {
    /* ASSETS_ENDPOINTS(domain).map((endpoint) => {
      client.get()
    }) */
  }
}
