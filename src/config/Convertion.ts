import { downloadDir } from '@tauri-apps/api/path'

import { PROD_VERSION } from './Endpoints'

const outputDir = (await downloadDir()).concat(String(PROD_VERSION))

const gamedataDir = outputDir.concat('/gamedata')
const genericDir = outputDir.concat('/generic')

export const Convertion = { outputDir, gamedataDir, genericDir }
