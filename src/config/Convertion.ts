import { downloadDir } from '@tauri-apps/api/path'

import { PROD_VERSION } from './Endpoints'

const gamedataDir = (await downloadDir()).concat(String(PROD_VERSION))
const gamedataConfigDir = gamedataDir.concat('/config')

export const Convertion = { gamedataDir, gamedataConfigDir }
