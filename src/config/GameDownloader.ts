import type { IDownloaderContent } from '../components'

export const GameDataDownloader: IDownloaderContent = {
  title: 'Converts and bundles:',
  features: ['XML/TXT to minified JSON files', 'Converts SWF files to JSV']
}

export const GameAssetsDownloader: IDownloaderContent = {
  title: 'Fetches PNG/JPEG:',
  features: [
    'Badges + Badgeparts',
    'Album + Recepetion images',
    'Catalogue + Furni icons',
    'Habbo Web Promo + Articles',
    'MP3 Sounds machine'
  ]
}
