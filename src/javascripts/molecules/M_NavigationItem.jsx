import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'

export default function M_NavigationItem({ number, title, description, offset }) {
  return (
    <div
      className="navigation-item"
      style={{ '--nav-offset': offset + 'px' }}
    >
      <A_Typography
        as="span"
        variant="nav"
      >
        {title}
      </A_Typography>
      <A_Typography variant="caption">
        {number} / {description}
      </A_Typography>
    </div>
  )
}
