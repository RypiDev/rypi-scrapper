import classNames from 'classnames'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: JSX.Element
  value: string
  className?: string
  handler?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  value,
  className,
  handler
}) => {
  return (
    <button
      onClick={handler}
      className={classNames(
        className,
        'flex items-center justify-center gap-x-5'
      )}>
      {icon}
      <span className='uppercase'>{value}</span>
    </button>
  )
}
