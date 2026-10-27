import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'
import A_TextLink from '../atoms/A_TextLink.jsx'

export default function O_ArtworkGallery({ artworks }) {
  return <section className="related-artworks" aria-labelledby="related-title">
    <A_Typography variant="h1" className="related-artworks__title" id="related-title">Другие работы</A_Typography>
    <A_Typography variant="h2" className="related-artworks__artist">Анны Гончаровой</A_Typography>
    <A_Typography variant="body" className="related-artworks__intro">Другие произведения художницы<br />из выставки NON-PLACES.</A_Typography>
    {artworks.map((artwork, i) => <article className={'related-artwork related-artwork--' + i} key={artwork.id}>
      <div className="related-artwork__image"><img src={artwork.image} alt={artwork.title + ' — ' + artwork.artist} /></div>
      <div className="related-artwork__details">
        <A_Typography variant="h2">{artwork.title}</A_Typography>
        <A_Typography variant="small">{artwork.artist} · {artwork.year}<br />{artwork.medium} · {artwork.dimensions}</A_Typography>
        <A_TextLink>СМОТРЕТЬ РАБОТУ</A_TextLink>
      </div>
    </article>)}
  </section>
}
