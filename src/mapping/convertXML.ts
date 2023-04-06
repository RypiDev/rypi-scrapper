import type {
  IEffectMap,
  IEffectMapLibrary,
  IFigureData,
  IFigureDataColor,
  IFigureDataHiddenLayer,
  IFigureDataPalette,
  IFigureDataPart,
  IFigureDataSet,
  IFigureDataSetType,
  IFigureMap,
  IFigureMapLibrary,
  IFigureMapLibraryPart
} from '../types'

export const convertXML = (
  XML: any,
  url: string
): IFigureData | IFigureMap | IEffectMap => {
  if (url.includes('figuredata')) {
    const output: IFigureData = { palettes: [], setTypes: [] }

    for (const paletteXML of XML.figuredata.colors.palette) {
      const palette: IFigureDataPalette = { id: 0, color: [] }

      if (paletteXML.id !== undefined) palette.id = paletteXML.id

      if (paletteXML.color !== undefined) {
        for (const colorXML of paletteXML.color) {
          const color: IFigureDataColor = {
            id: 0,
            index: 0,
            club: 0,
            selectable: false,
            hexCode: ''
          }

          const hexColor = String(colorXML['#text' as keyof IFigureDataColor])

          if (colorXML.id !== undefined) color.id = colorXML.id
          if (colorXML.index !== undefined) color.index = colorXML.index
          if (colorXML.club !== undefined) color.club = colorXML.club
          if (colorXML.selectable !== undefined)
            color.selectable = colorXML.selectable === 0 ? true : false
          if (hexColor !== undefined) color.hexCode = hexColor

          palette.color.push(color)
        }
      }

      output.palettes.push(palette)
    }

    for (const setTypeXML of XML.figuredata.sets.settype) {
      const settype: IFigureDataSetType = {
        type: '',
        paletteId: 0,
        mandatoryF0: false,
        mandatoryF1: false,
        mandatoryM0: false,
        mandatoryM1: false,
        sets: []
      }

      if (setTypeXML.type !== undefined) settype.type = setTypeXML.type
      if (setTypeXML.paletteId !== undefined)
        settype.paletteId = setTypeXML.paletteId
      if (setTypeXML.mandatoryF0 !== undefined)
        settype.mandatoryF0 = setTypeXML.mandatoryF0
      if (setTypeXML.mandatoryF1 !== undefined)
        settype.mandatoryF1 = setTypeXML.mandatoryF1
      if (setTypeXML.mandatoryM0 !== undefined)
        settype.mandatoryM0 = setTypeXML.mandatoryM0
      if (setTypeXML.mandatoryM1 !== undefined)
        settype.mandatoryM1 = setTypeXML.mandatoryM1

      if (setTypeXML.sets !== undefined) {
        for (const setXML of setTypeXML.sets) {
          const setType: IFigureDataSet = {
            id: 0,
            gender: 'U',
            club: 0,
            colorable: false,
            selectable: false,
            preselectable: false,
            sellable: false,
            parts: [],
            hiddenLayers: []
          }

          if (setXML.id !== undefined) setType.id = setXML.id
          if (setXML.gender !== undefined) setType.gender = setXML.gender
          if (setXML.club !== undefined) setType.club = setXML.club
          if (setXML.colorable !== undefined)
            setType.colorable = setXML.colorable === 0 ? true : false
          if (setXML.selectable !== undefined)
            setType.selectable = setXML.selectable
          if (setXML.preselectable !== undefined)
            setType.preselectable = setXML.preselectable
          if (setXML.sellable !== undefined) setType.sellable = setXML.sellable

          if (setXML.parts !== undefined) {
            for (const partXML of setXML.parts) {
              const part: IFigureDataPart = {
                id: 0,
                type: '',
                colorable: false,
                index: 0,
                colorindex: 0
              }

              if (partXML.id !== undefined) part.id = partXML.id
              if (partXML.type !== undefined) part.type = partXML.type
              if (partXML.colorable !== undefined)
                part.colorable = partXML.colorable
              if (partXML.index !== undefined) part.index = partXML.index
              if (partXML.colorindex !== undefined)
                part.colorindex = partXML.colorindex

              setType.parts.push(part)
            }
          }

          if (setXML.hiddenLayers !== undefined) {
            for (const hiddenLayerXML of setXML.hiddenLayers) {
              const hiddenLayer: IFigureDataHiddenLayer = { partType: '' }

              if (hiddenLayerXML.partType !== undefined)
                hiddenLayer.partType = hiddenLayerXML.partType

              setType.hiddenLayers?.push(hiddenLayer)
            }
          }

          settype.sets.push(setType)
        }
      }

      output.setTypes.push(setTypeXML)
    }

    return output
  } else if (url.includes('figuremap')) {
    const output: IFigureMap = { libraries: [] }

    for (const libraryXML of XML.map.lib as IFigureMapLibrary[]) {
      const library: IFigureMapLibrary = { id: '', revision: 0, part: [] }

      if (libraryXML.id !== undefined) library.id = libraryXML.id
      if (libraryXML.revision !== undefined)
        library.revision = libraryXML.revision

      if (Array.isArray(libraryXML.part)) {
        for (const libraryPart of libraryXML.part) {
          const libraryPartXML: IFigureMapLibraryPart = { id: 0, type: '' }

          if (libraryPart.id !== undefined) libraryPartXML.id = libraryPart.id
          if (libraryPart.type !== undefined)
            libraryPartXML.type = libraryPart.type

          library.part.push(libraryPartXML)
        }
      } else {
        const libraryPart = libraryXML.part as unknown as IFigureMapLibraryPart
        library.part.push({ id: libraryPart.id, type: libraryPart.type })
      }

      output.libraries.push(library)
    }

    return output
  } else {
    const output: IEffectMap = { effects: [] }

    for (const libraryXML of XML.map.effect as IEffectMapLibrary[]) {
      const library: IEffectMapLibrary = {
        id: 0,
        lib: '',
        type: '',
        revision: 0
      }

      if (libraryXML.id !== undefined) library.id = libraryXML.id
      if (libraryXML.lib !== undefined) library.lib = libraryXML.lib
      if (libraryXML.type !== undefined) library.type = libraryXML.type
      if (libraryXML.revision !== undefined)
        library.revision = libraryXML.revision

      output.effects.push(library)
    }

    return output
  }
}
