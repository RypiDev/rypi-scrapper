import { XMLParser } from 'fast-xml-parser'

import type { GameEndPointsTypes } from '../types'
import { FigureMap } from '../controllers/FigureMap'
import { EffectMap } from '../controllers/EffectMap'
import { convertTXT } from './convertTXT'
import { FigureData } from '../controllers/FigureData'
import { FurniData } from '../controllers/FurniData'
import { Convertion } from '../config/Convertion'
import { parseData } from './parseData'

export const fetchGamedataConfig = async (data: string, endpoint: GameEndPointsTypes[number]): Promise<unknown> => {
  switch (endpoint.convert) {
    case 'XML':
      const convertedData = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(data)
      let parsedData: FigureData | FigureMap | EffectMap | undefined

      if (endpoint.fileName === 'FigureData') {
        parsedData = new FigureData(convertedData, endpoint.fileName)
      } else if (endpoint.fileName === 'FigureMap') {
        parsedData = new FigureMap(convertedData, endpoint.fileName)
      } else if (endpoint.fileName === 'EffectMap') {
        parsedData = new EffectMap(convertedData, endpoint.fileName)
      }

      return await parseData(Convertion.gamedataDir, parsedData?.fileName, parsedData?.data).catch((error) => {
        return console.error(error)
      })
    case 'TXT':
      return await convertTXT(Convertion.gamedataDir, data)

    default: {
      let parsedData: FurniData | undefined

      if (endpoint.fileName === 'FurniData') {
        parsedData = new FurniData(JSON.parse(data), endpoint.fileName)
      }

      return await parseData(Convertion.gamedataDir, parsedData?.fileName, parsedData?.data).catch((error) => {
        return console.error(error)
      })
    }
  }
}
