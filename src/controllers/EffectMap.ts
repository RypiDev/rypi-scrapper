import { Convertion } from '../config/Convertion'
import { parseData } from '../tools/parseData'
import type { IEffectMap, IXML } from '../types'

export class EffectMap {
  public data: IEffectMap = { effects: [] }

  constructor(XML: IXML, fileName: string) {
    this.parseLibrairies(XML.map.effect)

    parseData(Convertion.gamedataConfigDir, fileName, this.data).catch((error) => {
      return console.error(error)
    })
  }

  private parseLibrairies(effects: any[]): void {
    for (const libraryXML of effects) {
      this.data.effects.push({
        id: Number(libraryXML.id),
        lib: libraryXML.lib,
        type: libraryXML.type,
        revision: Number(libraryXML.revision)
      })
    }
  }
}
