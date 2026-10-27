import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'
import A_TextLink from '../atoms/A_TextLink.jsx'
import M_ArtworkCaption from '../molecules/M_ArtworkCaption.jsx'
import M_ArtworkMetadata from '../molecules/M_ArtworkMetadata.jsx'

export default function O_ArtworkHero({ artwork, onZoom }) {
  return <section className="artwork-hero" aria-labelledby="artwork-title">
    <div className="artwork-hero__back"><A_TextLink arrow="" >← ВСЕ РАБОТЫ</A_TextLink></div>
    <A_Typography variant="display" className="artwork-hero__title" as="h1" id="artwork-title">{artwork.title}</A_Typography>
    <A_Typography variant="author" className="artwork-hero__artist">{artwork.artist}</A_Typography>
    <A_Typography variant="small" className="artwork-hero__year">{artwork.year}</A_Typography>
    <M_ArtworkMetadata artwork={artwork} />
    <div className="artwork-hero__exhibition">
      <A_Typography variant="eyebrow">{artwork.exhibition} · {artwork.exhibitionYear}</A_Typography>
      <A_TextLink>О ВЫСТАВКЕ</A_TextLink>
    </div>
    <figure className="artwork-hero__visual">
      <div className="artwork-hero__image"><img src={artwork.image} alt={'Картина ' + artwork.title + ' Анны Гончаровой'} /></div>
      <figcaption><M_ArtworkCaption artwork={artwork} /></figcaption>
    </figure>
    <button className="artwork-hero__zoom" type="button" onClick={onZoom}>УВЕЛИЧИТЬ&nbsp; ↗</button>
  </section>
}
