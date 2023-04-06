import { Maximize, Minus, X } from 'react-feather'
import { appWindow } from '@tauri-apps/api/window'

import { Image } from '../Image'

export const TitleBar: React.FC = () => {
  return (
    <nav className='flex h-[37.5px] items-center justify-between bg-[#1f1f1f] text-white'>
      <Image src='/Logo.svg' size={60} className='ml-3 p-1' />

      <ul className='flex h-full'>
        <li
          onClick={async () => {
            return await appWindow.minimize()
          }}
          className='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-[#2a2a2a]'>
          <Minus />
        </li>
        <li
          onClick={async () => {
            return (await appWindow.isMaximized())
              ? await appWindow.unmaximize()
              : await appWindow.maximize()
          }}
          className='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-[#2a2a2a]'>
          <Maximize size={20} />
        </li>
        <li
          onClick={async () => {
            return await appWindow.close()
          }}
          className='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-red-500'>
          <X />
        </li>
      </ul>
    </nav>
  )
}
