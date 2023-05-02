import type { KeyValuePairs } from './global'

export interface IFloorItemDimensions {
  x: number
  y: number
  defaultDirection: number
}

export interface IFloorItemPermissions {
  canSitOn: boolean
  canLayOn: boolean
  canStandOn: boolean
}

export interface IFloorItem extends IFurni {
  dimensions: IFloorItemDimensions
  permissions: IFloorItemPermissions
}

export interface IFurni {
  id: number
  classname: string
  description?: string
  name?: string
  furniLine?: string
  customParams?: string
  adurl?: string
  offerID?: number
  excludeDynamic: boolean
  specialType: number
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
