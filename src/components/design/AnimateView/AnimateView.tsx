import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import type { MotionComponentProps, Options as MotionProps } from '@motionone/solid'
import { Motion, Presence } from '@motionone/solid'

export interface AnimateViewProps extends MotionComponentProps {
  condition: boolean
  animation: MotionProps
  class?: string
}

export const AnimateView: Component<AnimateViewProps> = (props) => {
  return (
    <Presence>
      <Show when={props.condition}>
        <Motion.div {...props} initial={props.initial} animate={props.animate} exit={props.exit}>
          {props.children}
        </Motion.div>
      </Show>
    </Presence>
  )
}
