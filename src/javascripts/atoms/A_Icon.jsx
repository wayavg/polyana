import React from 'react'

export default function A_Icon({ name = 'arrow', ...rest }) {
  const glyph =
    name === 'close' ? '×' : name === 'back' ? '←' : name === 'plus' ? '+' : '↗'
  return (
    <span
      aria-hidden="true"
      {...rest}
    >
      {glyph}
    </span>
  )
}
