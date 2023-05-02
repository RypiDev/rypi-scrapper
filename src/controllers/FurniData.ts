import type { IFurni, IFurniData, IXML, KeyValuePairs } from '../types'

export class FurniData {
  public data: IFurniData = { floorItems: [], wallItems: [] }
  public fileName: string

  constructor(data: IXML, fileName: string) {
    this.fileName = fileName

    this.parseRoomItemTypes(data.roomitemtypes.furnitype)
    this.parseWallItemTypes(data.roomitemtypes.furnitype)
  }

  private parseRoomItemTypes(roomItems: IFurni[]): void {
    for (const roomItem of roomItems) {
      this.data.floorItems.push(roomItem)
    }
  }

  private parseWallItemTypes(wallItems: IFurni[]): void {
    for (const wallItem of wallItems) {
      this.data.wallItems.push(wallItem)
    }
  }

  private getClassNameRevision(itemType: IFurni): { className: string; revision: number } {
    const className = itemType.classname.split('*')[0]
    const revision = itemType.revision

    return { className, revision }
  }

  public get classNamesAndRevisions(): KeyValuePairs<string, string> {
    const entries: KeyValuePairs<string, string> = {}

    for (const roomItem of this.data.floorItems) {
      const { className, revision } = this.getClassNameRevision(roomItem)
      entries[className] = String(revision)
    }

    for (const wallItem of this.data.wallItems) {
      const { className, revision } = this.getClassNameRevision(wallItem)
      entries[className] = String(revision)
    }

    return entries
  }
}
