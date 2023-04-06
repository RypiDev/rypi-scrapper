import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export interface IDownloaderContent {
  title: string
  features: string[]
}

interface DownloaderProps {
  className?: string
  children: React.ReactNode
  content: IDownloaderContent
}

export const Downloader: React.FC<DownloaderProps> = ({
  className,
  children,
  content
}) => {
  const [activeContent, setActiveContent] = useState(false)

  const handleActiveContent = (): void => {
    return setActiveContent(!activeContent)
  }

  return (
    <li
      className={classNames(
        className,
        'relative rounded-xl shadow-red-500 hover:shadow-2xl'
      )}
      onMouseEnter={handleActiveContent}
      onMouseLeave={handleActiveContent}>
      {children}

      <AnimatePresence>
        {activeContent && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            exit={{ opacity: 0 }}
            className='pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/70 pb-5 text-[12px] text-white'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='mb-3 text-[16px]'>
              {content.title}
            </motion.h1>

            {content.features.map((feature) => {
              return (
                <motion.span
                  initial={{ opacity: 0, y: 50, scale: 0.75 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.75 }}
                  key={feature}>
                  {feature}
                </motion.span>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}
