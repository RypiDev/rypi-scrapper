import { createDir, exists, writeTextFile } from '@tauri-apps/api/fs'

export const parseData = async (path: string, fileName: string, fileContent: string | object): Promise<void> => {
  const fileDir = path.concat(`/${fileName}.json`)

  if (!(await exists(path))) await createDir(path)

  await writeTextFile(fileDir, typeof fileContent === 'object' ? JSON.stringify(fileContent) : fileContent)
}
