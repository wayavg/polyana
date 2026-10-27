import React from 'react'

export default function A_Divider({ className = '' }) {
  return (
    <div
      className={'a-divider ' + className}
      aria-hidden="true"
    />
  )
}
