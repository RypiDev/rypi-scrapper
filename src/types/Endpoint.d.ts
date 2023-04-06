export type GameEndPointsTypes = (
  domain: DomainTypes
) => Array<{ src: string; convert?: 'TXT' | 'XML'; fileName: string }>
