import { createDir, exists, writeFile } from '@tauri-apps/api/fs'

import { Convertion } from '../config/Convertion'

export const parseData = async (
  path: string,
  fileName: string | undefined,
  fileContent: string | object | undefined
): Promise<void> => {
  if (fileName == null || fileContent == null) return

  const fileDir = path.concat(`/${fileName}.json`)

  // By default, output files will be overwritten. I cannot recursively remove the entire output folder
  // and create it again because it just won't parse files' contents for some reason

  if (!(await exists(Convertion.gamedataDir))) await createDir(Convertion.gamedataDir, { recursive: true })

  return await writeFile(fileDir, typeof fileContent === 'object' ? JSON.stringify(fileContent) : fileContent)
}
