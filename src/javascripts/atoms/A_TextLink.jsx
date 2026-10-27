import React from 'react'

export default function A_TextLink({ children, href, arrow = '↗', className = '', ...rest }) {
  if (!href) return <span className={'a-link a-link--pending ' + className} aria-disabled="true">{children}<span aria-hidden="true"> {arrow}</span></span>
  return <a href={href} className={'a-link ' + className} {...rest}>{children}<span aria-hidden="true"> {arrow}</span></a>
}
