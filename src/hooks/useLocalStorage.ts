import type { Accessor } from 'solid-js'
import { createSignal } from 'solid-js'

export interface ILocalStorage {
  lang: Accessor<string>
  setLang: (domain: string) => void
}

const [lang, setLangeState] = createSignal<string>((localStorage.getItem('LANG_KEY') as string) ?? 'com')

const setLang: ILocalStorage['setLang'] = (domain) => {
  localStorage.setItem('LANG_KEY', domain)
  return setLangeState(domain)
}

export const useLocalStorage = (): ILocalStorage => {
  return { lang, setLang }
}
