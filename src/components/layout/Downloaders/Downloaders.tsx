import { Fragment, useState } from 'react'

import { Image, Popup } from '../../system'
import { Button } from '../Button'
import { GameAssetsDownloader, GameDataDownloader } from '../../../config/GameDownloader'
import { handleConvertion } from '../../../tools/handleConvertion'
import { Downloader } from './Downloader'
import type { ConvertionHandler } from '../../../types/global'

export const Downloaders: React.FC = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

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
        return setLoading(false)
    }
  }

  return (
    <Fragment>
      <Popup condition={false}>xd</Popup>

      <ul className='flex gap-x-8'>
        <Downloader content={GameDataDownloader}>
          <Image src='/images/Gamedata.png' />

          <Button
            value='Download Gamedata'
            icon={<Image src='/icons/game.png' size={22} />}
            className='download-button border-gamedata-secondary bg-gamedata-primary shadow-gamedata-primary/20'
            handler={async () => {
              return await handleConvertion('com', callback)
            }}
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
