import React from 'react'

export default function A_SelectionIndicator({ selected }) {
  return (
    <span
      className={'a-selection-indicator ' + (selected ? 'is-selected' : '')}
      aria-hidden="true"
    />
  )
}
