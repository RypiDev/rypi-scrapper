import type {
  IFigureDataPalette,
  IFigureDataSetType,
  IFigureMapLibrary,
  IFloorItem,
  IFurni,
  IProduct
} from './SubConverters'

export interface IFigureData {
  palettes: IFigureDataPalette[]
  setTypes: Record<string, IFigureDataSetType>
}

export interface IFigureMap {
  libraries: IFigureMapLibrary[]
  parts: Record<string, Record<number, number>>
}

export interface IFurniData {
  floorItems: IFloorItem[]
  wallItems: IFurni[]
}

export type IEffectMap = Record<string, Record<string, string>>

export interface IProductData {
  productData: { product: IProduct }
}
