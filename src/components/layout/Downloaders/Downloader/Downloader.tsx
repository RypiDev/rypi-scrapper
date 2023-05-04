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
        animation={Animation.fadeInOut()}
        condition={activeContent()}
        class='pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/70 pb-5 text-center text-[12px] text-white'>
        <Motion.h1 {...Animation.fadeInOut({ y: [-20, 0, -20] })} class='mb-3 text-[16px]'>
          {props.content.title}
        </Motion.h1>

        <For each={props.content.features}>
          {(feature) => {
            return (
              <Motion.span {...Animation.fadeInOut({ y: [50, 0, 50], scale: [0.75, 1, 0.75] })}>{feature}</Motion.span>
            )
          }}
        </For>
      </AnimateView>
    </li>
  )
}
