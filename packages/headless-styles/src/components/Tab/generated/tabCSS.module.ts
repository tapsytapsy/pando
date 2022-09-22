// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  tabWrapper: {},
  tabPanelWrapper: {},
  tabList: {
    backgroundColor: 'var(--ps-surface-weak)',
    borderBottom: '1px solid var(--ps-border-weak)',
    display: 'flex',
    overflowY: 'auto',
    position: 'relative',
    width: '100%',
  },
  tabBase: {
    appearance: 'none',
    background: 'transparent',
    border: '0',
    color: 'var(--ps-action-text-weak)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    height: '4rem',
    padding: '0',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      borderRadius: '2px 2px 0 0',
      bottom: '0',
      content: "''",
      display: 'block',
      height: '0',
      left: '0',
      marginTop: '1.125rem',
      position: 'absolute',
      right: '0',
      transition: 'height 150ms ease-in-out',
      width: '100%',
    },
    '&:hover::after': {
      backgroundColor: 'var(--ps-background-hover)',
      height: '0.25rem',
    },
    '&:focus': {
      outline: '3px solid var(--ps-info-border)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  tabBase____tabBase: {
    marginInlineStart: '2rem',
  },
  mTab: {
    composes: 'tabBase',
  },
  sTab: {
    composes: 'tabBase',
    fontSize: '0.875rem',
    height: '3rem',
    '&::after': {
      marginTop: '0.72rem',
    },
  },
  sTab____sTab: {
    marginInlineStart: '1.5rem',
  },
  tabBase_aria_selected__true: {
    color: 'var(--ps-action-text-inverse)',
    '&::after': {
      backgroundColor: 'var(--ps-action-border)',
      height: '0.25rem',
    },
  },
  tabPanel: {
    marginBlockStart: '1rem',
    width: '100%',
  },
  tabPanel_aria_hidden__true: {
    display: 'none',
  },
}
