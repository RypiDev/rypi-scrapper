import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import classNames from 'classnames'

import type { ConvertionHandler } from '../../../types'
import { handleConvertion } from '../../../tools/handleConvertion'
import { Animation, GameAssetsDownloader, GameDataDownloader } from '../../../config'
import { Button, Image, Loader } from '../../design'
import { Popup } from '../Popup'
import { Downloader } from './Downloader/Downloader'

export const Downloaders: Component = () => {
  const [message, setMessage] = createSignal('')
  const [error, setError] = createSignal(false)
  const [popup, setPopup] = createSignal(false)
  const [loading, setLoading] = createSignal(false)

  const callback: ConvertionHandler = (message, state = 'idle') => {
    switch (state) {
      case 'loading':
        setMessage(message)
        return setLoading(true)
      case 'success':
        setMessage(message)
        return setLoading(false)
      case 'error':
        setMessage(message)
        setError(true)
        return setLoading(false)
    }
  }

  const downloadGameData = async (): Promise<void> => {
    setPopup(true)
    setLoading(true)

    const startTime = new Date()
    await handleConvertion('com', callback)

    const endTime = new Date()
    const seconds = ((endTime.getTime() - startTime.getTime()) / 1000).toFixed(2)

    return callback(`Completed in: ${seconds} seconds`, 'success')
  }

  console.log(Animation.fadeInOut({ scale: [0, 1, 0], y: [1, 4, 1] }))

  return (
    <>
      <Loader active={loading()} class='mt-10' />
      <Popup condition={popup()}>
        <span
          class={classNames('', {
            'text-red-600': error
          })}>
          {message()}
        </span>

        <Button
          value='Close'
          icon={<Image src='/icons/cross.png' />}
          class={classNames('invisible mt-6 bg-red-600 p-2 px-4 text-white opacity-0 active:opacity-40', {
            '!visible !opacity-100': !loading()
          })}
          handler={() => {
            return setPopup(!popup())
          }}
        />
      </Popup>

      <ul class='flex gap-x-8'>
        <Downloader content={GameDataDownloader}>
          <Image src='/images/Gamedata.png' />

          <Button
            value='Download Gamedata'
            icon={<Image src='/icons/game.png' size={22} />}
            class='download-button border-gamedata-secondary bg-gamedata-primary shadow-gamedata-primary/20'
            handler={downloadGameData}
          />
        </Downloader>

        <Downloader content={GameAssetsDownloader}>
          <Image src='/images/GameAssets.png' />

          <Button
            value='Download GameAssets'
            icon={<Image src='/icons/picture.png' pixelated />}
            class='download-button border-gameAssets-secondary bg-gameAssets-primary shadow-gameAssets-primary/40'
          />
        </Downloader>
      </ul>
    </>
  )
}
