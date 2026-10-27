import React, { useCallback, useState } from 'react'
import A_Typography from '../atoms/A_Typography.jsx'
import A_Divider from '../atoms/A_Divider.jsx'
import A_TextLink from '../atoms/A_TextLink.jsx'
import O_Header from '../organisms/O_Header.jsx'
import O_MainNavigation from '../organisms/O_MainNavigation.jsx'
import O_ArtworkHero from '../organisms/O_ArtworkHero.jsx'
import O_ArtworkGallery from '../organisms/O_ArtworkGallery.jsx'
import O_PurchasePanel from '../organisms/O_PurchasePanel.jsx'
import O_PurchaseDialog from '../organisms/O_PurchaseDialog.jsx'
import O_Footer from '../organisms/O_Footer.jsx'
import { ARTWORK_LIGHT, RELATED_ARTWORKS } from '../data/artworks.js'

export default function P_ArtworkPage({
  artwork = ARTWORK_LIGHT,
  relatedArtworks = RELATED_ARTWORKS
}) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [zoomOpen, setZoomOpen] = useState(false)
  const closeDialog = useCallback(() => setDialogOpen(false), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  return (
    <>
      <div className="artwork-page">
        <O_Header onMenu={() => setMenuOpen(true)} />
        <O_ArtworkHero
          artwork={artwork}
          onZoom={() => setZoomOpen(true)}
        />
        <O_PurchasePanel
          artwork={artwork}
          onInquiry={() => setDialogOpen(true)}
        />
        <A_Divider className="page-rule page-rule--1" />
        <section className="editorial-section editorial-section--about">
          <A_Typography variant="h1">О произведении</A_Typography>
          <A_Typography>
            Light — живописная работа Анны Гончаровой, созданная в 2025 году. Произведение
            представлено в каталоге персональной выставки NON-PLACES, проходившей в
            «Поляне» в 2026 году.
          </A_Typography>
        </section>
        <A_Divider className="page-rule page-rule--2" />
        <section className="editorial-section editorial-section--artist">
          <A_Typography variant="h1">Об авторе</A_Typography>
          <A_Typography variant="h2">Анна Гончарова</A_Typography>
          <A_Typography>
            В выставке NON-PLACES Анна Гончарова обращается к переходным состояниям и
            неопределённости. В проекте соединяются живопись, инсталляции и видеоарт.
          </A_Typography>
        </section>
        <A_Divider className="page-rule page-rule--3" />
        <section className="exhibition-feature">
          <A_Typography
            variant="eyebrow"
            className="exhibition-feature__eyebrow"
          >
            ИЗ ВЫСТАВКИ
          </A_Typography>
          <A_Typography
            variant="h1"
            className="exhibition-feature__title"
          >
            NON-PLACES
          </A_Typography>
          <img
            src={artwork.exhibitionImage}
            className="exhibition-feature__image"
            alt="Вид экспозиции NON-PLACES, 2026"
          />
          <A_Typography
            variant="caption"
            className="exhibition-feature__caption"
          >
            NON-PLACES. Вид экспозиции, 2026
          </A_Typography>
          <div className="exhibition-feature__details">
            <A_Typography variant="eyebrow">ВЫСТАВКА ПРОШЛА</A_Typography>
            <A_Typography>24 января — 7 февраля 2026</A_Typography>
            <A_Typography>
              Персональная выставка Анны Гончаровой, посвящённая переходу и
              неопределённости. Живопись, инсталляции и видеоарт объединяются вокруг опыта
              пограничного состояния.
            </A_Typography>
            <A_Typography variant="small">Куратор — Александра Зайцева</A_Typography>
            <A_TextLink>ПОСМОТРЕТЬ ВЫСТАВКУ</A_TextLink>
          </div>
        </section>
        <A_Divider className="page-rule page-rule--4" />
        <O_ArtworkGallery artworks={relatedArtworks} />
        <A_Divider className="page-rule page-rule--5" />
        <div className="page-next">
          <A_TextLink arrow="">← ВСЕ РАБОТЫ</A_TextLink>
          <A_TextLink arrow="→">ВСЕ ХУДОЖНИКИ</A_TextLink>
        </div>
        <O_Footer />
      </div>
      <O_MainNavigation
        isOpen={menuOpen}
        onClose={closeMenu}
      />
      <O_PurchaseDialog
        artwork={artwork}
        isOpen={dialogOpen}
        onClose={closeDialog}
      />
      {zoomOpen && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={'Увеличенное изображение ' + artwork.title}
          onClick={() => setZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            aria-label="Закрыть увеличенное изображение"
          >
            ЗАКРЫТЬ ×
          </button>
          <img
            src={artwork.image}
            alt={artwork.title}
          />
        </div>
      )}
    </>
  )
}
