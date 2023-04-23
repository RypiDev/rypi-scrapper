import type { IFigureMap, IFigureMapLibrary, IXML } from '../types'

export class FigureMap {
  public data: IFigureMap = { libraries: [] }

  constructor(XML: IXML) {
    this.parseLibrairies(XML.map.lib)
  }

  private parseLibrairies(librairies: any[]): void {
    for (const libraryXML of librairies) {
      const library: IFigureMapLibrary = { id: libraryXML.id, revision: Number(libraryXML.revision), part: [] }

      for (const libraryPart of Array.isArray(libraryXML.part) ? libraryXML.part : [libraryXML.part]) {
        library.part.push({ id: Number(libraryPart.id), type: libraryPart.type })
      }

      this.data.libraries.push(library)
    }
  }

  // maybe
  /* public get classNamesAndRevisions(data: IFigureData): { [index: string]: string } {} */
}
