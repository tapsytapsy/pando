import { createJSProps } from '../../utils/helpers'
import { getDefaultSkeletonOptions } from './shared'
import styles from './generated/skeletonCSS.module'
import type { SkeletonOptions } from './types'

function getChakraSkeletonBaseConfig() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { animationName, ...restOfStyles } = styles.base
  return restOfStyles
}

export const ChakraSkeleton = {
  baseStyle: getChakraSkeletonBaseConfig(),
  defaultProps: {
    variant: 'content',
  },
  variants: {
    circle: styles.circle,
    content: styles.content,
    text: styles.text,
  },
}

export function getJSSkeletonProps(options?: SkeletonOptions) {
  const { kind } = getDefaultSkeletonOptions(options)
  const jsStyles = {
    ...styles.base,
    ...styles[kind as keyof typeof styles],
  }
  const keyframes = {
    keyframes: {
      ...styles.keyframesFadeInOut['@keyframes fadeInOut'],
    },
  }

  return { ...createJSProps(jsStyles), keyframes }
}
