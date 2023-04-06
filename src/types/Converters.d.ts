import type {
  IEffectMapLibrary,
  IFigureDataPalette,
  IFigureDataSetType,
  IFigureMapLibrary,
  IFurni,
  IProduct
} from './SubConverters'

export interface IFigureData {
  palettes: IFigureDataPalette[]
  setTypes: IFigureDataSetType[]
}

export interface IFigureMap {
  libraries: IFigureMapLibrary[]
}

export interface IFurniData {
  roomitemtypes: { furnitype: IFurni }
  wallitemtypes: { furnitype: IFurni }
}

export interface IEffectMap {
  effects: IEffectMapLibrary[]
}

export interface IProductData {
  productData: { product: IProduct }
}
