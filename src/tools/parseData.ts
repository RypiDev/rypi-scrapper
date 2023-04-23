import { createDir, exists, writeTextFile } from '@tauri-apps/api/fs'

import { Convertion } from '../config/Convertion'

export const parseData = async (path: string, fileName: string, fileContent: string | object): Promise<void> => {
  const fileDir = path.concat(`/${fileName}.json`)

  if (!(await exists(Convertion.gamedataDir))) await createDir(Convertion.gamedataDir)
  if (!(await exists(Convertion.gamedataConfigDir))) await createDir(Convertion.gamedataConfigDir)

  await writeTextFile(fileDir, typeof fileContent === 'object' ? JSON.stringify(fileContent) : fileContent)
}
