import { downloadDir } from '@tauri-apps/api/path'
import { createDir, exists, writeTextFile } from '@tauri-apps/api/fs'

import { PROD_VERSION } from '../config/ENDPOINTS'

export const parseData = async (
  fileName: string,
  fileContent: string | object
): Promise<void> => {
  const outputDir = (await downloadDir()).concat(String(PROD_VERSION))
  const fileDir = outputDir.concat(`/${fileName}.json`)

  if (!(await exists(outputDir))) await createDir(outputDir)

  await writeTextFile(
    fileDir,
    typeof fileContent === 'object' ? JSON.stringify(fileContent) : fileContent
  )
}
