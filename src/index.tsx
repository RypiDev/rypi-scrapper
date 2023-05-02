import { render } from 'solid-js/web'

import './styles/fonts.css'
import './styles/styles.css'
import App from './App'

render(() => {
  return <App />
}, document.getElementById('root') as HTMLElement)
