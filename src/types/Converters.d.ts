import type {
  IFigureDataPalette,
  IFigureDataSetType,
  IFigureMapLibrary,
  IFloorItem,
  IFurni,
  IProduct
} from './SubConverters'
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
  floorItems: IFloorItem[]
  wallItems: IFurni[]
}

export type IEffectMap = KeyValuePairs<string, KeyValuePairs<string, string>>

export interface IProductData {
  productData: { product: IProduct }
}
