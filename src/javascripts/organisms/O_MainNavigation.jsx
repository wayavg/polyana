import React, { useEffect, useRef } from 'react'
import A_Button from '../atoms/A_Button.jsx'
import A_Typography from '../atoms/A_Typography.jsx'
import M_NavigationItem from '../molecules/M_NavigationItem.jsx'

const ITEMS = [
  ['01', 'Работы', 'ПРОИЗВЕДЕНИЯ', 0],
  ['02', 'Художники', 'ЛЮДИ И ИХ ПРАКТИКИ', 192],
  ['03', 'События', 'ВЫСТАВКИ И АРХИВ', 72],
  ['04', 'О Поляне', 'ИСТОРИЯ И КОМАНДА', 320]
]

export default function O_MainNavigation({ isOpen, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    if (!isOpen) return
    const previous = document.activeElement
    closeRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previous?.focus?.()
    }
  }, [isOpen, onClose])
  if (!isOpen) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Перекличка — меню сайта"
      className="main-navigation"
    >
      <div className="main-navigation__top">
        <A_Typography variant="brand">Поляна</A_Typography>
        <A_Button
          ref={closeRef}
          onClick={onClose}
        >
          ЗАКРЫТЬ&nbsp;&nbsp; ×
        </A_Button>
      </div>
      <div className="main-navigation__rule" />
      <A_Typography variant="eyebrow">ПЕРЕКЛИЧКА / 04 ГОЛОСА</A_Typography>
      <nav aria-label="Основные разделы">
        {ITEMS.map(([number, title, description, offset]) => (
          <M_NavigationItem
            key={number}
            number={number}
            title={title}
            description={description}
            offset={offset}
          />
        ))}
      </nav>
      <div className="main-navigation__bottom" />
    </div>
  )
}
