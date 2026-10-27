import React from 'react'
import A_Button from '../atoms/A_Button.jsx'
import A_Typography from '../atoms/A_Typography.jsx'
import A_Divider from '../atoms/A_Divider.jsx'

export default function O_Header({ onMenu }) {
  return (
    <header className="site-header">
      <A_Typography
        as="span"
        variant="brand"
        className="site-header__brand"
      >
        Поляна
      </A_Typography>
      <A_Button
        className="site-header__menu"
        onClick={onMenu}
      >
        МЕНЮ&nbsp;&nbsp; +
      </A_Button>
      <A_Divider className="site-header__rule" />
    </header>
  )
}
