import type { HTMLMotionProps } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'

export interface AnimateViewProps extends HTMLMotionProps<'main'> {
  condition: boolean
  children: React.ReactNode
}

export const AnimateView: React.FC<AnimateViewProps> = ({ condition, children, ...rest }) => {
  return (
    <AnimatePresence>
      {condition && (
        <motion.main initial={rest.initial} animate={rest.animate} exit={rest.exit} {...rest}>
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  )
}
