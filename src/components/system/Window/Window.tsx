import { Fragment } from 'react'

import { TitleBar } from '../TitleBar'

interface WindowProps {
  children: React.ReactNode
}

export const Window: React.FC<WindowProps> = ({ children }) => {
  return (
    <Fragment>
      <TitleBar />

      <main className='relative flex items-center justify-center py-20 h-full w-screen flex-col bg-[#242424]'>
        {children}
      </main>
    </Fragment>
  )
}