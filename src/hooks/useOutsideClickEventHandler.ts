import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

export const useOutSideClickEventHandler = (callback: () => void): RefObject<HTMLDivElement> => {
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: KeyboardEvent): void => {
      if (Boolean(wrapper.current?.contains(event.target as Node))) return
      if (event.key !== 'Escape') return
      return callback()
    }

    window.addEventListener('click', (event: any) => {
      return handleClickOutside(event)
    })

    window.addEventListener('keydown', (event: any) => {
      return handleClickOutside(event)
    })

    return () => {
      return window.removeEventListener('click', (event: any) => {
        return handleClickOutside(event)
      })
    }
  }, [])

  return wrapper
}
