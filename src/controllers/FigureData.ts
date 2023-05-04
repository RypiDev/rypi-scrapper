import type { IFigureData, IFigureDataPalette, IFigureDataSet, IFigureDataSetType, IXML } from '../types'

export class FigureData {
  public data: IFigureData = { palettes: [], setTypes: {} }
  public fileName: string

  constructor(XML: IXML, fileName: string) {
    this.fileName = fileName

    this.parsePalettes(XML.figuredata.colors.palette)
    this.parseSetTypes(XML.figuredata.sets.settype)
  }

  private parsePalettes(palettes: any[]): void {
    for (const paletteXML of palettes) {
      const palette = {} as IFigureDataPalette

      for (const colorXML of paletteXML.color) {
        palette[Number(colorXML.id)] = {
          index: Number(colorXML.index),
          club: Number(colorXML.club),
          selectable: Boolean(colorXML.selectable),
          color: '#' + String(colorXML['#text'])
        }
      }

      this.data.palettes.push(palette)
    }
  }

  private parseSetTypes(setTypes: any[]): void {
    for (const setTypeXML of setTypes) {
      const settype: IFigureDataSetType = {
        paletteId: Number(setTypeXML.paletteid),
        mandatoryF0: Boolean(Number(setTypeXML.mand_f_0)),
        mandatoryF1: Boolean(Number(setTypeXML.mand_f_1)),
        mandatoryM0: Boolean(Number(setTypeXML.mand_m_0)),
        mandatoryM1: Boolean(Number(setTypeXML.mand_m_1)),
        sets: {}
      }

      for (const setXML of setTypeXML.set) {
        const setType: IFigureDataSet = {
          gender: setXML.gender,
          club: Number(setXML.club),
          colorable: Boolean(Number(setXML.colorable)),
          selectable: Boolean(Number(setXML.selectable)),
          preselectable: Boolean(Number(setXML.preselectable)),
          sellable: setXML.sellable != null ? Boolean(Number(setXML.sellable)) : undefined,
          parts: [],
          hiddenLayers: []
        }

        for (const partXML of Array.isArray(setXML.part) ? setXML.part : [setXML.part]) {
          setType.parts.push({
            id: Number(partXML.id),
            type: partXML.type,
            colorable: Boolean(Number(partXML.colorable)),
            index: Number(partXML.index),
            colorindex: Number(partXML.colorindex)
          })
        }

        if (setXML.hiddenLayers != null) {
          for (const hiddenLayerXML of Array.isArray(setXML.hiddenLayers)
            ? setXML.hiddenLayers
            : [setXML.hiddenLayers]) {
            setType.hiddenLayers?.push(hiddenLayerXML.partType)
          }
        }

        settype.sets[Number(setXML.id)] = setType
      }

      this.data.setTypes[String(setTypeXML.type)] = settype
    }
  }
}
