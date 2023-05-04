import classNames from 'classnames'
import type { Component } from 'solid-js'

import { SUPPORTED_LANGS } from '../../../config'

interface FlagProps {
  label?: boolean
  domain: string
}

export const Flag: Component<FlagProps> = (props) => {
  const lang = SUPPORTED_LANGS.filter((lang) => {
    return lang.domain === props.domain
  })[0]

  return (
    <>
      <span class={classNames('', `fi fi-${lang.code}`)} />
      {Boolean(props.label) && <span class='ml-3'>{lang.name}</span>}
    </>
  )
}
