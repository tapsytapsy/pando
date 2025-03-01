import { createClassNameProp } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  createTagProps,
} from './shared'
import type { TagOptions } from './types'
import styles from './tagCSS.module.css'

const TAG = 'pando-tag'

export function getTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { sizeClass } = createTagSelectorClasses(defaultOptions.size)
  const props = createTagProps(defaultOptions)

  return {
    ...props,
    tag: {
      ...createClassNameProp(
        TAG,
        styles[sizeClass],
        ...defaultOptions.classNames
      ),
    },
  }
}
