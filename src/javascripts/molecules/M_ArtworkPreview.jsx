import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'

export default function M_ArtworkPreview({ artwork }) {
  return (
    <div className="artwork-preview">
      <div className="artwork-preview__text">
        <A_Typography variant="h2">{artwork.title}</A_Typography>
        <A_Typography variant="small">
          {artwork.artist} · {artwork.year}
        </A_Typography>
      </div>
      <img
        src={artwork.image}
        alt={artwork.title + ' — ' + artwork.artist}
      />
    </div>
  )
}
