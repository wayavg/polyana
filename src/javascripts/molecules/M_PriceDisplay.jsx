import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'

export const formatRuble = (value) =>
  new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })
    .format(value)
    .replace(/\u00a0/g, ' ') + ' ₽'

export default function M_PriceDisplay({ price, note, compact = false }) {
  return (
    <div className={'price-display ' + (compact ? 'price-display--compact' : '')}>
      <A_Typography variant="eyebrow">СТОИМОСТЬ</A_Typography>
      <A_Typography
        as="p"
        variant={compact ? 'h2' : 'h1'}
      >
        {formatRuble(price)}
      </A_Typography>
      {note && <A_Typography variant="caption">{note}</A_Typography>}
    </div>
  )
}
