import { Fragment, useState } from 'react'
import classNames from 'classnames'

import { Image, Popup } from '../../system'
import { Button } from '../Button'
import { GameAssetsDownloader, GameDataDownloader } from '../../../config/GameDownloader'
import { handleConvertion } from '../../../tools/handleConvertion'
import { Downloader } from './Downloader'
import type { ConvertionHandler } from '../../../types/global'
import { Loader } from '../../design'

export const Downloaders: React.FC = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [popup, setPopup] = useState(false)
  const [loading, setLoading] = useState(true)

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

  return (
    <Fragment>
      <Popup condition={popup}>
        <span
          className={classNames('', {
            'text-red-600': error
          })}>
          {message}
        </span>

        <Loader active={loading} className='mt-10' />

        <Button
          value='Close'
          icon={<Image src='/icons/cross.png' />}
          className={classNames('bg-red-600 mt-6 opacity-0 p-2 px-4 active:opacity-40 invisible text-white', {
            '!opacity-100 !visible': !loading
          })}
          handler={() => {
            return setPopup(!popup)
          }}
        />
      </Popup>

      <ul className='flex gap-x-8'>
        <Downloader content={GameDataDownloader}>
          <Image src='/images/Gamedata.png' />

          <Button
            value='Download Gamedata'
            icon={<Image src='/icons/game.png' size={22} />}
            className='download-button border-gamedata-secondary bg-gamedata-primary shadow-gamedata-primary/20'
            handler={downloadGameData}
          />
        </Downloader>

        <Downloader content={GameAssetsDownloader}>
          <Image src='/images/GameAssets.png' />

          <Button
            value='Download GameAssets'
            icon={<Image src='/icons/picture.png' icon />}
            className='download-button border-gameAssets-secondary bg-gameAssets-primary shadow-gameAssets-primary/40'
          />
        </Downloader>
      </ul>
    </Fragment>
  )
}
