import type { IFigureDataPalette, IFigureDataSetType, IFigureMapLibrary, IFurni, IProduct } from './SubConverters'
import type { KeyValuePairs } from './global'

export interface IFigureData {
  palettes: IFigureDataPalette[]
  setTypes: KeyValuePairs<string, IFigureDataSetType>
}

export interface IFigureMap {
  libraries: IFigureMapLibrary[]
  parts: KeyValuePairs<string, KeyValuePairs<number, number>>
}

export interface IFurniData {
  roomItemTypes: IFurni[]
  wallItemTypes: IFurni[]
}

export type IEffectMap = KeyValuePairs<string, KeyValuePairs<string, string>>

export interface IProductData {
  productData: { product: IProduct }
}
