import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'

export default function M_ArtworkCaption({ artwork }) {
  return <A_Typography variant="small">{artwork.artist}. {artwork.title}, {artwork.year}. {artwork.medium}, {artwork.dimensions}</A_Typography>
}
