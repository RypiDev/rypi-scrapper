import { useState } from 'react'

import { Image, Window, Button, Downloader } from './components'
import { fetchGameData } from './utils/fetchGameData'
import {
  GameAssetsDownloader,
  GameDataDownloader
} from './config/GameDownloader'

const Main: React.FC = () => {
  const [_error, setError] = useState('')
  const [_response, setResponse] = useState('')
  const [_loading, setLoading] = useState(false)

  const callback = (message: string, error = false): void => {
    if (error) return setError(message)
    if (message === 'COMPLETED') setLoading(false)
    else setResponse(message)
  }

  return (
    <Window>
      <span className='mb-20 text-white'>I would like to:</span>

      <ul className='flex gap-x-8'>
        <Downloader content={GameDataDownloader}>
          <Image src='/images/Gamedata.png' className='w-[400px]' />

          <Button
            value='Download Gamedata'
            icon={<Image src='/icons/game.png' size={22} />}
            className='download-button border-gamedata-secondary bg-gamedata-primary shadow-gamedata-primary/20'
            handler={async () => {
              return await fetchGameData('com', callback)
            }}
          />
        </Downloader>

        <Downloader content={GameAssetsDownloader}>
          <Image src='/images/GameAssets.png' className='w-[400px]' />

          <Button
            value='Download GameAssets'
            icon={<Image src='/icons/picture.png' icon />}
            className='download-button border-gameAssets-secondary bg-gameAssets-primary shadow-gameAssets-primary/40'
          />
        </Downloader>
      </ul>
    </Window>
  )
}

export default Main
