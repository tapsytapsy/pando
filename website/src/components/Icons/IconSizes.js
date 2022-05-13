import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { StarIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psXSIconProps = getIconProps({ size: 'xs' })
const psSIconProps = getIconProps({ size: 's' })
const psMIconProps = getIconProps()
const psLIconProps = getIconProps({ size: 'l' })

function IconSizes() {
  return (
    <Container>
      <StarIcon {...psXSIconProps} />
      <StarIcon {...psSIconProps} />
      <StarIcon {...psMIconProps} />
      <StarIcon {...psLIconProps} />
    </Container>
  )
}

export default IconSizes
