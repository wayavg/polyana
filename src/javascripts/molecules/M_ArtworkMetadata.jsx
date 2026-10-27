import React from 'react'
import A_Divider from '../atoms/A_Divider.jsx'
import A_Typography from '../atoms/A_Typography.jsx'

export default function M_ArtworkMetadata({ artwork }) {
  return (
    <div className="artwork-metadata">
      <A_Divider />
      <A_Typography
        variant="eyebrow"
        className="artwork-metadata__category"
      >
        {artwork.category}
      </A_Typography>
      <A_Typography>{artwork.medium}</A_Typography>
      <A_Typography>{artwork.dimensions}</A_Typography>
    </div>
  )
}
