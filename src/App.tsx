import type { Component } from 'solid-js'

import { Downloaders, TitleBar, LangDropdown } from './components/layout'

const Main: Component = () => {
  return (
    <>
      <TitleBar />

      <main class='relative flex h-full w-screen flex-col items-center justify-center bg-[#242424] py-20 text-white'>
        <span class='mb-20'>I would like to:</span>

        <LangDropdown />

        <Downloaders />
      </main>
    </>
  )
}

export default Main
