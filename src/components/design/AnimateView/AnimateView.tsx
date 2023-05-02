import { Show, createEffect } from 'solid-js'
import type { Component } from 'solid-js'
import type { MotionComponentProps, Variant } from '@motionone/solid'
import { Motion, Presence } from '@motionone/solid'

export interface AnimateViewProps extends MotionComponentProps {
  animation: Record<string, Variant>
  condition: boolean
  class?: string
}

export const AnimateView: Component<AnimateViewProps> = (props) => {
  createEffect(() => {
    console.log(props.condition)
  })
  return (
    <Presence>
      <Show when={props.condition}>
        <Motion.div class={props.class} {...props.animation}>
          {props.children}
        </Motion.div>
      </Show>
    </Presence>
  )
}
