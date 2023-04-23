import classNames from 'classnames'

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  size?: number
  icon?: boolean
}

export const Image: React.FC<ImageProps> = ({ size, icon, ...rest }) => {
  return (
    <img
      {...rest}
      draggable={false}
      style={{ imageRendering: Boolean(icon) ? 'pixelated' : 'unset' }}
      className={classNames(rest.className, 'select-none')}
      height={size ?? rest.height}
      width={size ?? rest.width}
    />
  )
}
