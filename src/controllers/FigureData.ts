import type {
  IFigureData,
  IFigureDataColor,
  IFigureDataPalette,
  IFigureDataSet,
  IFigureDataSetType,
  IXML
} from '../types'

export class FigureData {
  public data: IFigureData = { palettes: [], setTypes: [] }

  constructor(XML: IXML) {
    this.parsePalettes(XML.figuredata.colors.palette)
    this.parseSetTypes(XML.figuredata.sets.settype)
  }

  private parsePalettes(palettes: any[]): void {
    for (const paletteXML of palettes) {
      const palette: IFigureDataPalette = { id: Number(paletteXML.id), color: [] }

      for (const colorXML of paletteXML.color) {
        palette.color.push({
          id: Number(colorXML.id),
          index: Number(colorXML.index),
          club: Number(colorXML.club),
          selectable: Boolean(colorXML.selectable),
          hexCode: String(colorXML['#text' as keyof IFigureDataColor])
        })
      }

      this.data.palettes.push(palette)
    }
  }

  private parseSetTypes(setTypes: any[]): void {
    for (const setTypeXML of setTypes) {
      const settype: IFigureDataSetType = {
        type: setTypeXML.type,
        paletteId: Number(setTypeXML.paletteid),
        mandatoryF0: Boolean(setTypeXML.mand_f_0),
        mandatoryF1: Boolean(setTypeXML.mand_f_1),
        mandatoryM0: Boolean(setTypeXML.mand_m_0),
        mandatoryM1: Boolean(setTypeXML.mand_m_1),
        sets: []
      }

      for (const setXML of setTypeXML.set) {
        const setType: IFigureDataSet = {
          id: Number(setXML.id),
          gender: setXML.gender,
          club: Number(setXML.club),
          colorable: Boolean(setXML.colorable),
          selectable: Boolean(setXML.selectable),
          preselectable: Boolean(setXML.preselectable),
          sellable: Boolean(setXML.sellable),
          parts: [],
          hiddenLayers: []
        }

        for (const partXML of Array.isArray(setXML.part) ? setXML.part : [setXML.part]) {
          setType.parts.push({
            id: Number(partXML.id),
            type: partXML.type,
            colorable: Boolean(partXML.colorable),
            index: Number(partXML.index),
            colorindex: Number(partXML.colorindex)
          })
        }

        if (setXML.hiddenLayers != null) {
          for (const hiddenLayerXML of Array.isArray(setXML.hiddenLayers)
            ? setXML.hiddenLayers
            : [setXML.hiddenLayers]) {
            setType.hiddenLayers.push({ partType: hiddenLayerXML.partType })
          }
        }

        settype.sets.push(setType)
      }

      this.data.setTypes.push(setTypeXML)
    }
  }
}
