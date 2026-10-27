import React from 'react'

export default function A_Label({ htmlFor, children, required = false }) {
  return <label className="a-label" htmlFor={htmlFor}>{children}{required ? ' *' : ''}</label>
}
