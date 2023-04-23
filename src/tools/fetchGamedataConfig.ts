import { XMLParser } from 'fast-xml-parser'

import { FigureMap } from '../controllers/FigureMap'
import { EffectMap } from '../controllers/EffectMap'
import type { GameEndPointsTypes } from '../types'
import { convertTXT } from './convertTXT'
import { FigureData } from '../controllers/FigureData'
import { FurniData } from '../controllers/FurniData'
import { Convertion } from '../config/Convertion'

export const fetchGamedataConfig = async (data: string, endpoint: GameEndPointsTypes[number]): Promise<unknown> => {
  switch (endpoint.convert) {
    case 'XML':
      const convertedData = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(data)

      if (endpoint.fileName === 'FigureData') {
        return new FigureData(convertedData, endpoint.fileName)
      } else if (endpoint.fileName === 'FigureMap') {
        return new FigureMap(convertedData, endpoint.fileName)
      } else if (endpoint.fileName === 'EffectMap') {
        return new EffectMap(convertedData, endpoint.fileName)
      }

      break
    case 'TXT':
      return await convertTXT(Convertion.gamedataDir, data)

    default:
      if (endpoint.fileName === 'FurniData') {
        return new FurniData(JSON.parse(data), endpoint.fileName)
      }
  }
}
