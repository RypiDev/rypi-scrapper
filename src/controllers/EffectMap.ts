import type { IEffectMap } from '../types'

export class EffectMap {
  public data: IEffectMap = {}
  public fileName: string

  constructor(XML: any, fileName: string) {
    this.fileName = fileName

    this.parseLibrairies(XML.map.effect)
  }

  private parseLibrairies(effects: any[]): void {
    for (const libraryXML of effects) {
      this.data[libraryXML.type] == null && (this.data[libraryXML.type] = {})
      this.data[libraryXML.type][libraryXML.id] = libraryXML.lib
    }
  }
}
