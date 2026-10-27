import React from 'react'

export default function A_Button({ children, variant = 'text', arrow = false, className = '', type = 'button', ...rest }) {
  return <button type={type} className={'a-button a-button--' + variant + ' ' + className} {...rest}>
    <span>{children}</span>{arrow && <span aria-hidden="true">↗</span>}
  </button>
}
