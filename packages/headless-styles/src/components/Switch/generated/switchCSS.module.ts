// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    gap: '0.875rem',
  },
  container: {
    display: 'inline-block',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'middle',
  },
  input: {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .track': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible) + .track': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  thumb: {
    background: 'var(--ps-action-text-weak)',
    borderRadius: 'inherit',
    height: 'var(--ps-thumb-size)',
    transform:
      'translateX( calc(-1 * (var(--ps-track-width) - var(--ps-thumb-size) * 1.5)) ) scale(var(--ps-thumb-off-scale))',
    transitionDuration: '200ms',
    transitionProperty: 'transform, background',
    width: 'var(--ps-thumb-size)',
    "&[data-checked='true']": {
      background: 'var(--ps-action-text)',
      transform: 'translateX(0) scale(1)',
    },
    "&[data-invalid='true']": {
      background: 'var(--ps-danger-background)',
    },
    "&[data-invalid='true'][data-checked='true']": {
      background: 'var(--ps-danger-text-inverse)',
    },
  },
  track: {
    '--ps-thumb-off-scale': '0.6667',
    '--ps-thumb-size': '1.125rem',
    '--ps-track-height': '1.625rem',
    '--ps-track-width': '3.125rem',
    alignItems: 'center',
    border: '1px solid var(--ps-action-border)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    height: 'var(--ps-track-height)',
    justifyContent: 'flex-end',
    padding: '3px',
    transitionDuration: '150ms',
    transitionProperty: 'background, border-color, transform',
    width: 'var(--ps-track-width)',
    "&:is([disabled], [data-readonly='true'])": {
      cursor: 'not-allowed',
    },
    "&:not([disabled], [data-readonly='true']):hover > .thumb": {
      background: 'var(--ps-action-text-inverse)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-action-text)',
      },
    "&:is([data-invalid='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-danger-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover > .thumb":
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    "&[data-checked='true']": {
      background: 'var(--ps-action-background)',
      borderColor: 'var(--ps-action-background)',
    },
    "&[data-invalid='true']": {
      borderColor: 'var(--ps-danger-border)',
    },
    "&[data-invalid='true'][data-checked='true']": {
      background: 'var(--ps-danger-background)',
      borderColor: 'var(--ps-danger-background)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover":
      {
        background: 'var(--ps-action-background-hover)',
        borderColor: 'var(--ps-action-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover":
      {
        background: 'var(--ps-danger-background-hover)',
        borderColor: 'var(--ps-danger-background-hover)',
      },
  },
  sTrack: {
    '--ps-thumb-off-scale': '0.6667',
    '--ps-thumb-size': '0.75rem',
    '--ps-track-height': '1.125rem',
    '--ps-track-width': '2.125rem',
    alignItems: 'center',
    border: '1px solid var(--ps-action-border)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    height: 'var(--ps-track-height)',
    justifyContent: 'flex-end',
    padding: '2px',
    transitionDuration: '150ms',
    transitionProperty: 'background, border-color, transform',
    width: 'var(--ps-track-width)',
    "&:is([disabled], [data-readonly='true'])": {
      cursor: 'not-allowed',
    },
    "&:not([disabled], [data-readonly='true']):hover > .thumb": {
      background: 'var(--ps-action-text-inverse)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-action-text)',
      },
    "&:is([data-invalid='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-danger-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover > .thumb":
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    "&[data-checked='true']": {
      background: 'var(--ps-action-background)',
      borderColor: 'var(--ps-action-background)',
    },
    "&[data-invalid='true']": {
      borderColor: 'var(--ps-danger-border)',
    },
    "&[data-invalid='true'][data-checked='true']": {
      background: 'var(--ps-danger-background)',
      borderColor: 'var(--ps-danger-background)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover":
      {
        background: 'var(--ps-action-background-hover)',
        borderColor: 'var(--ps-action-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover":
      {
        background: 'var(--ps-danger-background-hover)',
        borderColor: 'var(--ps-danger-background-hover)',
      },
  },
  mTrack: {
    '--ps-thumb-off-scale': '0.6667',
    '--ps-thumb-size': '1.125rem',
    '--ps-track-height': '1.625rem',
    '--ps-track-width': '3.125rem',
    alignItems: 'center',
    border: '1px solid var(--ps-action-border)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    height: 'var(--ps-track-height)',
    justifyContent: 'flex-end',
    padding: '3px',
    transitionDuration: '150ms',
    transitionProperty: 'background, border-color, transform',
    width: 'var(--ps-track-width)',
    "&:is([disabled], [data-readonly='true'])": {
      cursor: 'not-allowed',
    },
    "&:not([disabled], [data-readonly='true']):hover > .thumb": {
      background: 'var(--ps-action-text-inverse)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-action-text)',
      },
    "&:is([data-invalid='true']):not([disabled], [data-readonly='true']):hover > .thumb":
      {
        background: 'var(--ps-danger-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover > .thumb":
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    "&[data-checked='true']": {
      background: 'var(--ps-action-background)',
      borderColor: 'var(--ps-action-background)',
    },
    "&[data-invalid='true']": {
      borderColor: 'var(--ps-danger-border)',
    },
    "&[data-invalid='true'][data-checked='true']": {
      background: 'var(--ps-danger-background)',
      borderColor: 'var(--ps-danger-background)',
    },
    "&:is([data-checked='true']):not([disabled], [data-readonly='true']):hover":
      {
        background: 'var(--ps-action-background-hover)',
        borderColor: 'var(--ps-action-background-hover)',
      },
    "&:is([data-invalid='true'][data-checked='true']):not( [disabled], [data-readonly='true'] ):hover":
      {
        background: 'var(--ps-danger-background-hover)',
        borderColor: 'var(--ps-danger-background-hover)',
      },
  },
} satisfies GeneratedStyles
