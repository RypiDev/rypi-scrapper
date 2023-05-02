import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

export const useOutSideClickEventHandler = (callback: () => void): RefObject<HTMLDivElement> => {
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: KeyboardEvent | MouseEvent): void => {
      const currentEvent = event as KeyboardEvent

      if (
        wrapper.current == null ||
        Boolean(wrapper.current.contains(currentEvent.target as Node)) ||
        currentEvent.key !== 'Escape'
      )
        return

      return callback()
    }

    window.addEventListener('click', (event) => {
      return handleClickOutside(event)
    })

    window.addEventListener('keydown', (event) => {
      return handleClickOutside(event)
    })

    return () => {
      window.removeEventListener('click', (event) => {
        return handleClickOutside(event)
      })

      window.removeEventListener('keydown', (event) => {
        return handleClickOutside(event)
      })
    }
  }, [])

  return wrapper
}
