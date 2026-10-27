import React from 'react'

const TAGS = {
  display: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  body: 'p',
  small: 'p',
  caption: 'p',
  eyebrow: 'p'
}

export default function A_Typography({
  as,
  variant = 'body',
  className = '',
  children,
  ...rest
}) {
  const Tag = as || TAGS[variant] || 'p'
  return (
    <Tag
      className={'type type--' + variant + ' ' + className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
