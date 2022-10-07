import { useState } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps } from '../../../src'

const positions = [
  'topStart',
  'top',
  'topEnd',
  'rightStart',
  'right',
  'rightEnd',
  'bottomStart',
  'bottom',
  'bottomEnd',
  'leftStart',
  'left',
  'leftEnd',
]

function TooltipEl(props) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  function disable() {
    setDisabled(true)
  }

  function enable() {
    setDisabled(false)
  }

  useEscToClose(disable)

  return (
    <div>
      <div {...tooltipProps.wrapper} onMouseEnter={enable} onFocus={enable}>
        <div {...tooltipProps.trigger}>{props.children}</div>
        <div {...tooltipProps.tooltip}>
          <div {...tooltipProps.tooltipContent}>
            Sample tooltip text goes here.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tooltip() {
  return (
    <div id="tooltip">
      <h2>Tooltips</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoFlow: 'row',
          gap: '1rem',
          width: '50rem',
          margin: '0 auto',
        }}
      >
        {positions.map((position) => (
          <TooltipEl
            id={`tooltip:${position}`}
            key={position}
            position={position}
          >
            {position}
          </TooltipEl>
        ))}
      </div>
    </div>
  )
}
