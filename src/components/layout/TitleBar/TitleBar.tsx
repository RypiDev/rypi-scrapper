import { FiMaximize, FiMinus, FiX } from 'solid-icons/fi'
import { appWindow } from '@tauri-apps/api/window'
import type { Component } from 'solid-js'

import { Image } from '../../design'

export const TitleBar: Component = () => {
  return (
    <nav class='!z-50 flex h-[40px] w-full items-center justify-between bg-[#1f1f1f] text-white'>
      <div
        class='w-full select-none'
        onMouseDown={async () => {
          return await appWindow.startDragging()
        }}>
        <Image src='/Logo.svg' size={60} class='ml-3 p-1' />
      </div>

      <ul class='flex h-full'>
        <li
          class='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-[#2a2a2a]'
          onClick={async () => {
            return await appWindow.minimize()
          }}>
          <FiMinus />
        </li>

        <li class='grid h-full w-14 cursor-not-allowed place-items-center opacity-40'>
          <FiMaximize size={20} />
        </li>

        <li
          class='grid h-full w-14 cursor-pointer place-items-center transition-colors duration-[10ms] hover:bg-red-500'
          onClick={async () => {
            return await appWindow.close()
          }}>
          <FiX />
        </li>
      </ul>
    </nav>
  )
}
