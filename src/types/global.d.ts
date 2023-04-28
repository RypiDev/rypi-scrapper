export type StateTypes = 'idle' | 'loading' | 'error' | 'success'
export type ConvertionHandler = (message: string, state: StateTypes) => void

export type KeyValuePairs<KeyType extends number | string, ValueType> = {
  [key in KeyType]: ValueType
}
