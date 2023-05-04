import { FigureMap } from '../controllers/FigureMap'
import { EffectMap } from '../controllers/EffectMap'
import { convertTXT } from './convertTXT'
import { FigureData } from '../controllers/FigureData'
import { FurniData } from '../controllers/FurniData'
import { Convertion } from '../config/Convertion'
import { parseData } from './parseData'

export const fetchGamedataConfig = async (data: string, endpoint: GamedataEndpoints): Promise<unknown> => {
  switch (endpoint.convert) {
    case 'XML':
      const convertedData = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(data)
      let parsedData: FigureData | FigureMap | EffectMap | undefined

      if (endpoint.file_name === 'FigureData') {
        parsedData = new FigureData(convertedData, endpoint.file_name)
      } else if (endpoint.file_name === 'FigureMap') {
        parsedData = new FigureMap(convertedData, endpoint.file_name)
      } else if (endpoint.file_name === 'EffectMap') {
        parsedData = new EffectMap(convertedData, endpoint.file_name)
      }

      return await parseData(Convertion.gamedataDir, parsedData?.fileName, parsedData?.data).catch((error) => {
        return console.error(error)
      })
    case 'TXT':
      return await convertTXT(Convertion.gamedataDir, data)

    default: {
      let parsedData: FurniData | undefined

      if (endpoint.file_name === 'FurniData') {
        parsedData = new FurniData(JSON.parse(data), endpoint.file_name)
      }

      return await parseData(Convertion.gamedataDir, parsedData?.fileName, parsedData?.data).catch((error) => {
        return console.error(error)
      })
    }
  }
}
