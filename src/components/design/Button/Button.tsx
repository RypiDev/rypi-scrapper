import classNames from 'classnames'
import type { Component, ComponentProps, JSXElement } from 'solid-js'

interface ButtonProps extends ComponentProps<'button'> {
  icon: JSXElement
  value: string
  class?: string
  handler?: () => void
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button onClick={props.handler} class={classNames(props.class, 'flex items-center justify-center gap-x-5')}>
      {props.icon}
      <span class='uppercase'>{props.value}</span>
    </button>
  )
}
