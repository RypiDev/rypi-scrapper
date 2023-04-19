import { ResponseType } from '@tauri-apps/api/http'
import { XMLParser } from 'fast-xml-parser'

import { GAME_ENDPOINTS, client } from '../config/ENDPOINTS'
import type { DomainTypes } from '../types/Domain'
import { convertTXT, convertXML } from '../mapping'
import { parseData } from './parseData'

export const fetchGameData = async (
  domain: DomainTypes,
  callback: (message: string, error: boolean) => void,
  assetsOption = false
): Promise<void> => {
  if (!assetsOption) {
    await Promise.all(
      GAME_ENDPOINTS(domain).map(async (endpoint) => {
        await client
          .get(endpoint.src, { responseType: ResponseType.Text })
          .then(async ({ data }) => {
            const currentData = data as string

            switch (endpoint.convert) {
              case 'XML':
                const convertedData = new XMLParser({
                  ignoreAttributes: false,
                  attributeNamePrefix: ''
                }).parse(currentData)

                const XML2JSON = convertXML(convertedData, endpoint.src)

                return await parseData(endpoint.fileName, XML2JSON)
              case 'TXT':
                return await convertTXT(currentData)

              default:
                return await parseData(endpoint.fileName, currentData)
            }
          })
          .catch((error) => {
            console.error(error)
            return callback(error, true)
          })
      })
    )
  } else {
    /* ASSETS_ENDPOINTS(domain).map((endpoint) => {
      client.get()
    }) */
  }
}
