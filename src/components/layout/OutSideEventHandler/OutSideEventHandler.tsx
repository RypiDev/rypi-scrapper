import type { Component, ComponentProps } from 'solid-js'
import { onCleanup, onMount } from 'solid-js'

interface OutSideEventHandlerProps extends ComponentProps<'div'> {
  onOutsideClick: () => void
}

export const OutSideEventHandler: Component<OutSideEventHandlerProps> = (props) => {
  let ref: HTMLDivElement | undefined

  const handleClickOutside = (event: MouseEvent | KeyboardEvent): void => {
    const currentEvent = event as KeyboardEvent

    if (ref == null) return
    if (ref.contains(event.target as Node) || currentEvent.key !== 'Escape') return

    return props.onOutsideClick()
  }

  onMount(() => {
    window.addEventListener('keydown', handleClickOutside)
    return window.addEventListener('click', handleClickOutside)
  })

  onCleanup(() => {
    window.removeEventListener('keydown', handleClickOutside)
    return window.removeEventListener('click', handleClickOutside)
  })

  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  )
}
