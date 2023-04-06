export interface IFurni {
  id: number
  classname: string
  revision: number
  category: string
  defaultdir: number
  xdim: number
  ydim: number
  partcolors: { color: string[] }
  name: string
  description: string
  adurl: string
  offerid: number
  buyout: boolean
  rentofferid: number
  rentbuyout: boolean
  bc: boolean
  excludeddynamic: boolean
  customparams: string
  specialtype: number
  canstandon: boolean
  cansiton: boolean
  canlayon: boolean
  furniline: string
  environment: string
  rare: boolean
}

export interface IFigureDataColor {
  id: number
  index: number
  club: number // must be changed, either 0, 1, 2
  selectable: boolean
  hexCode: string
}

export interface IFigureDataPalette {
  id: number
  color: IFigureDataColor[]
}

export interface IFigureDataPart {
  id: number
  type: string // must be changed
  colorable: boolean // must be changed
  index: number
  colorindex: number
}

export interface IFigureDataHiddenLayer {
  partType: string // must be changed
}

export interface IFigureDataSet {
  id: number
  gender: 'M' | 'F' | 'U'
  club: number // 0, 1, 2
  colorable: boolean // must be changed
  selectable: boolean // must be changed
  preselectable: boolean // must be changed
  sellable?: boolean // must be changed
  parts: IFigureDataPart[]
  hiddenLayers?: IFigureDataHiddenLayer[]
}

export interface IFigureDataSetType {
  type: string // must be changed
  paletteId: number
  mandatoryF0: boolean // 0, 1
  mandatoryF1: boolean // 0, 1
  mandatoryM0: boolean // 0, 1
  mandatoryM1: boolean // 0, 1
  sets: IFigureDataSet[]
}

export interface IFigureMapLibraryPart {
  id: number
  type: string
}

export interface IFigureMapLibrary {
  id: string
  revision: number
  part: IFigureMapLibraryPart[]
}

export interface IEffectMapLibrary {
  id: number
  lib: string
  type: string
  revision: number
}

export interface IProduct {
  color: string
  name: string
  description: string
}
