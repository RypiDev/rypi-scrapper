export type StateTypes = 'idle' | 'loading' | 'error' | 'success'
export type ConvertionHandler = (message: string, state: StateTypes) => void

export interface KeyValuePairs {
  [index: string]: string
}
