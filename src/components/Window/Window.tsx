import { Fragment } from 'react'

import { TitleBar } from '../TitleBar/TitleBar'

interface WindowProps {
  children: React.ReactNode
}

export const Window: React.FC<WindowProps> = ({ children }) => {
  return (
    <Fragment>
      <TitleBar />

      <main className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#242424] p-10'>
        {children}
      </main>
    </Fragment>
  )
}
