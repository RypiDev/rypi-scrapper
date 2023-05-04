import classNames from 'classnames'
import type { Component } from 'solid-js'

interface ImageProps {
  size?: number
  pixelated?: boolean
  src: string
  class?: string
  height?: number
  width?: number
}

export const Image: Component<ImageProps> = (props) => {
  return (
    <img
      {...props}
      elementtiming=''
      fetchpriority='auto'
      style={{ 'image-rendering': Boolean(props.pixelated) ? 'pixelated' : 'unset' }}
      class={classNames(props.class, 'select-none')}
      height={props.size ?? props.height}
      width={props.size ?? props.width}
    />
  )
}
