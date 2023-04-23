import { parseData } from '../tools/parseData'
import type { IFurni, IFurniData, IXML, KeyValuePairs } from '../types'
import { Convertion } from '../config/Convertion'

export class FurniData {
  public data: IFurniData = { roomItemTypes: [], wallItemTypes: [] }

  constructor(data: IXML, fileName: string) {
    this.parseRoomItemTypes(data.roomitemtypes.furnitype)
    this.parseWallItemTypes(data.roomitemtypes.furnitype)

    parseData(Convertion.gamedataConfigDir, fileName, this.data).catch((error) => {
      return console.error(error)
    })
  }

  private parseRoomItemTypes(roomItems: IFurni[]): void {
    for (const roomItem of roomItems) {
      this.data.roomItemTypes.push(roomItem)
    }
  }

  private parseWallItemTypes(wallItems: IFurni[]): void {
    for (const wallItem of wallItems) {
      this.data.wallItemTypes.push(wallItem)
    }
  }

  private getClassNameRevision(itemType: IFurni): { className: string; revision: number } {
    const className = itemType.classname.split('*')[0]
    const revision = itemType.revision

    return { className, revision }
  }

  public get classNamesAndRevisions(): KeyValuePairs {
    const entries: KeyValuePairs = {}

    for (const roomItem of this.data.roomItemTypes) {
      const { className, revision } = this.getClassNameRevision(roomItem)
      entries[className] = String(revision)
    }

    for (const wallItem of this.data.wallItemTypes) {
      const { className, revision } = this.getClassNameRevision(wallItem)
      entries[className] = String(revision)
    }

    return entries
  }
}
