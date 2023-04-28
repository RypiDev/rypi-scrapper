import type { IFigureMap, IFigureMapLibrary, IXML } from '../types'

export class FigureMap {
  public data: IFigureMap = { libraries: [], parts: {} }
  public fileName: string

  constructor(XML: IXML, fileName: string) {
    this.fileName = fileName

    this.parseLibrairies(XML.map.lib)
  }

  private parseLibrairies(librairies: any[]): void {
    for (const libraryXML of librairies) {
      const library: IFigureMapLibrary = { id: libraryXML.id, revision: Number(libraryXML.revision) }

      for (const libraryPart of Array.isArray(libraryXML.part) ? libraryXML.part : [libraryXML.part]) {
        this.data.parts[libraryPart.type] == null && (this.data.parts[libraryPart.type] = {})
        this.data.parts[libraryPart.type][Number(libraryPart.id)] = librairies.indexOf(libraryXML)
      }

      this.data.libraries.push(library)
    }
  }
}
