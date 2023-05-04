import type { Component } from 'solid-js'
import { createSignal, For } from 'solid-js'
import { Motion } from '@motionone/solid'

import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { AnimateView, Flag } from '../../design'
import { OutSideEventHandler } from '../OutSideEventHandler'
import { Animation, SUPPORTED_LANGS } from '../../../config'

export const LangDropdown: Component = () => {
  const { lang, setLang } = useLocalStorage()

  let ref: HTMLDivElement | undefined
  const [active, setActive] = createSignal(false)

  return (
    <OutSideEventHandler
      class='relative text-sm'
      onOutsideClick={() => {
        return setActive(false)
      }}>
      <div
        ref={ref}
        class='cursor-pointer'
        onclick={() => {
          return setActive(!active())
        }}>
        Selected Lang: <Flag domain={lang()} />
      </div>

      <AnimateView condition={active()} class='absolute top-8 z-20' animation={Animation.fadeInOut()}>
        <For each={SUPPORTED_LANGS}>
          {(lang, index) => {
            return (
              <Motion.p
                {...Animation.fadeInOut({ x: [50 / (index() + 1), 0, 0] })}
                transition={{ delay: (index() + 1) / 15 }}
                class='cursor-pointer'
                onclick={() => {
                  setActive(false)
                  return setLang(lang.domain)
                }}>
                <Flag domain={lang.domain} label />
              </Motion.p>
            )
          }}
        </For>
      </AnimateView>
    </OutSideEventHandler>
  )
}
