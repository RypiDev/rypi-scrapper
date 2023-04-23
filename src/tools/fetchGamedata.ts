import { downloadDir } from '@tauri-apps/api/path'
import { XMLParser } from 'fast-xml-parser'
import { writeTextFile } from '@tauri-apps/api/fs'

import { PROD_VERSION } from '../config/Endpoints'
import { FigureMap } from '../controllers/FigureMap'
import { EffectMap } from '../controllers/EffectMap'
import type { GameEndPointsTypes, IEffectMap, IFigureData, IFigureMap } from '../types'
import { parseData } from './parseData'
import { convertTXT } from './convertTXT'
import { FigureData } from '../controllers/FigureData'
import { FurniData } from '../controllers/FurniData'

export const fetchGamedata = async (data: string, endpoint: GameEndPointsTypes[number]): Promise<void> => {
  const subDir = '/config'

  const outputDir = async (path: string): Promise<string> => {
    return (await downloadDir()).concat(String(PROD_VERSION) + path)
  }

  switch (endpoint.convert) {
    case 'XML':
      const convertedData = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(data)

      const XML2JSON = () => {
        if (endpoint.fileName === 'FigureData') {
          return new FigureData(convertedData).data
        } else if (endpoint.fileName === 'FigureMap') {
          return new FigureMap(convertedData).data
        } else if (endpoint.fileName === 'EffectMap') {
          return new EffectMap(convertedData)
        }
      }

      XML2JSON()

      break

    /* return await parseData(await outputDir(subDir), endpoint.fileName, XML2JSON) */
    case 'TXT':
      return await convertTXT(await outputDir(subDir), data)

    default:
      const handleJSON = () => {
        if (endpoint.fileName === 'FurniData') {
          return new FurniData(JSON.parse(data))
        }
      }

      handleJSON()
      break

    /* return await parseData(await outputDir(subDir), endpoint.fileName, data) */
  }
}
