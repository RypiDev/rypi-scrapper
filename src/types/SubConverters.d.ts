import type { KeyValuePairs } from './global'

export interface IFurni {
  id: number
  classname: string
  revision: number
  category?: string
  defaultdir: number
  xdim: number
  ydim: number
  partcolors?: { color: string[] }
  name?: string
  description?: string
  adurl?: string
  offerid?: number
  buyout: boolean
  rentofferid: number
  rentbuyout: boolean
  bc: boolean
  excludeddynamic: boolean
  customparams?: string
  specialtype: number
  canstandon: boolean
  cansiton: boolean
  canlayon: boolean
  furniline?: string
  environment?: string
  rare: boolean
}

export type Club = 'idle' | 'HC' | 'VIP'

export interface IFigureDataPaletteType {
  index: number
  club: number
  selectable: boolean
  color: string
}

export type IFigureDataPalette = KeyValuePairs<number, IFigureDataPaletteType>

export interface IFigureDataPart {
  id: number
  type: string
  colorable: boolean
  index: number
  colorindex: number
}

export interface IFigureDataSet {
  gender: 'M' | 'F' | 'U'
  club: number
  colorable: boolean
  selectable: boolean
  preselectable: boolean
  sellable?: boolean
  hiddenLayers?: string[]
  parts: IFigureDataPart[]
}

export interface IFigureDataSetType {
  paletteId: number
  mandatoryF0: boolean
  mandatoryF1: boolean
  mandatoryM0: boolean
  mandatoryM1: boolean
  sets: KeyValuePairs<number, IFigureDataSet>
}

export interface IFigureMapLibraryPart {
  id: number
  type: string
}

export interface IFigureMapLibrary {
  id: string
  revision: number
}

export interface IProduct {
  color: string
  name: string
  description: string
}
