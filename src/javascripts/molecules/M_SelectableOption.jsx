import React from 'react'
import A_SelectionIndicator from '../atoms/A_SelectionIndicator.jsx'

export default function M_SelectableOption({
  value,
  current,
  children,
  onSelect,
  group
}) {
  const selected = value === current
  return (
    <button
      type="button"
      className={'selectable-option ' + (selected ? 'is-selected' : '')}
      aria-pressed={selected}
      onClick={() => onSelect(value)}
      data-group={group}
    >
      <A_SelectionIndicator selected={selected} />
      {children}
    </button>
  )
}
