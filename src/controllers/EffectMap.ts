import type { IEffectMap, IXML } from '../types'

export class EffectMap {
  public effects: IEffectMap['effects'] = []

  constructor(XML: IXML) {
    this.parseLibrairies(XML.map.effect)
  }

  private parseLibrairies(effects: any[]): void {
    for (const libraryXML of effects) {
      this.effects.push({
        id: Number(libraryXML.id),
        lib: libraryXML.lib,
        type: libraryXML.type,
        revision: Number(libraryXML.revision)
      })
    }
  }
}
