import React from 'react'
import A_Button from '../atoms/A_Button.jsx'
import A_Typography from '../atoms/A_Typography.jsx'
import M_PriceDisplay from '../molecules/M_PriceDisplay.jsx'

export default function O_PurchasePanel({ artwork, onInquiry }) {
  return (
    <section
      className="purchase-panel"
      aria-label="Приобретение работы"
    >
      <div className="purchase-panel__heading">
        <A_Typography variant="h2">Приобретение</A_Typography>
        <A_Typography variant="caption">Узнать о доступности работы</A_Typography>
      </div>
      <M_PriceDisplay
        price={artwork.price}
        note={artwork.availability}
      />
      <A_Button
        variant="solid"
        arrow
        onClick={onInquiry}
      >
        УТОЧНИТЬ ПРИОБРЕТЕНИЕ
      </A_Button>
    </section>
  )
}
