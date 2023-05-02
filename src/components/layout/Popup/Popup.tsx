import type { Component, JSXElement } from 'solid-js'

import { AnimateView } from '../../design'
import { Animation } from '../../../config'

interface PopupProps {
  condition: boolean
  children: JSXElement
}

export const Popup: Component<PopupProps> = (props) => {
  return (
    <AnimateView
      animation={Animation.fadeInOut()}
      class='absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center bg-black/40 text-white backdrop-blur-xl transition-all'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      condition={props.condition}>
      {props.children}
    </AnimateView>
  )
}
