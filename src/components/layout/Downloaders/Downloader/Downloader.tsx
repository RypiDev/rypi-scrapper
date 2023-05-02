import { Motion } from '@motionone/solid'
import classNames from 'classnames'
import type { Component, JSXElement } from 'solid-js'
import { For, createSignal } from 'solid-js'

import type { GameDataDownloader } from '../../../../config'
import { Animation } from '../../../../config'
import { AnimateView } from '../../../design'

interface DownloaderProps {
  className?: string
  children: JSXElement
  content: typeof GameDataDownloader
}

export const Downloader: Component<DownloaderProps> = (props) => {
  const [activeContent, setActiveContent] = createSignal(false)

  const handleActiveContent = (): boolean => {
    return setActiveContent(!activeContent())
  }

  return (
    <li
      class={classNames(props.className, 'relative rounded-xl shadow-red-500 hover:shadow-2xl')}
      onMouseEnter={handleActiveContent}
      onMouseLeave={handleActiveContent}>
      {props.children}

      <AnimateView
        condition={activeContent()}
        animation={Animation.fadeInOut()}
        class='pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/70 pb-5 text-center text-[12px] text-white'>
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          class='mb-3 text-[16px]'>
          {props.content.title}
        </Motion.h1>

        <For each={props.content.features}>
          {(feature) => {
            return (
              <Motion.span
                initial={{ opacity: 0, y: 50, scale: 0.75 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.75 }}>
                {feature}
              </Motion.span>
            )
          }}
        </For>
      </AnimateView>
    </li>
  )
}
