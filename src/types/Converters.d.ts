import type { IFigureDataPalette, IFigureDataSetType, IFigureMapLibrary, IProduct } from './SubConverters'

export interface IFigureData {
  palettes: IFigureDataPalette[]
  setTypes: Record<string, IFigureDataSetType>
}

export interface IFigureMap {
  libraries: IFigureMapLibrary[]
  parts: Record<string, Record<number, number>>
}

export type IEffectMap = Record<string, Record<string, string>>

export interface IProductData {
  productData: { product: IProduct }
}
