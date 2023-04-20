import { Maximize, Minus, X } from 'react-feather'
import { appWindow } from '@tauri-apps/api/window'

import { Image } from '../Image'

export const TitleBar: React.FC = () => {
  return (
    <nav className='flex w-full h-[40px] items-center justify-between bg-[#1f1f1f] text-white'>
      <div
        className='w-full select-none'
        onMouseDown={async () => {
          return await appWindow.startDragging()
        }}>
        <Image src='/Logo.svg' size={60} className='ml-3 p-1' />
      </div>

      <ul className='flex h-full'>
        <li
          className='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-[#2a2a2a]'
          onClick={async () => {
            return await appWindow.minimize()
          }}>
          <Minus />
        </li>

        <li className='grid h-full w-14 place-items-center cursor-not-allowed opacity-40'>
          <Maximize size={20} />
        </li>

        <li
          className='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-red-500'
          onClick={async () => {
            return await appWindow.close()
          }}>
          <X />
        </li>
      </ul>
    </nav>
  )
}
