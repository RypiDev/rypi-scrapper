export type Club = 'idle' | 'HC' | 'VIP'

export interface IFigureDataPaletteType {
  index: number
  club: number
  selectable: boolean
  color: string
}

export type IFigureDataPalette = Record<number, IFigureDataPaletteType>

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
  sets: Record<number, IFigureDataSet>
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
