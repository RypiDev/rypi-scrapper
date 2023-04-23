import { Window } from './components/system'
import { Downloaders } from './components/layout'

const Main: React.FC = () => {
  return (
    <Window>
      <span className='mb-20 text-white'>I would like to:</span>

      <Downloaders />
    </Window>
  )
}

export default Main
