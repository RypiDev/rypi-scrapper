import { AnimateView } from '../AnimateView'

interface PopupProps {
  condition: boolean
  children: React.ReactNode
}

export const Popup: React.FC<PopupProps> = ({ condition, children }) => {
  return (
    <AnimateView
      className='absolute flex text-white items-center flex-col transition-all justify-center z-20 top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-xl'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      condition={condition}>
      {children}
    </AnimateView>
  )
}
