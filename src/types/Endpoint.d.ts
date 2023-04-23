import type { XMLParser } from 'fast-xml-parser'

export type GameEndPointsTypes = Array<{
  src: string
  convert?: 'TXT' | 'XML'
  fileName: string
}>

export type IXML = ReturnType<XMLParser['parse']>
