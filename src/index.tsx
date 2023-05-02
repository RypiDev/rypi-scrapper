import { render } from 'solid-js/web'

import './styles.css'
import '@fontsource/press-start-2p'
import App from './App'

render(() => {
  return <App />
}, document.getElementById('root') as HTMLElement)
