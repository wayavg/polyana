import lightImage from '../../assets/images/light.png'
import exhibitionImage from '../../assets/images/non-places.jpg'
import theRoomImage from '../../assets/images/the-room.jpg'
import movementImage from '../../assets/images/movement.png'
import perspectiveImage from '../../assets/images/perspective.png'

export const ARTWORK_LIGHT = {
  id: 'light',
  title: 'Light',
  artist: 'Анна Гончарова',
  year: '2025',
  medium: 'Холст, масло',
  dimensions: '70 × 45 см',
  category: 'ЖИВОПИСЬ',
  exhibition: 'NON-PLACES',
  exhibitionYear: '2026',
  price: 37000,
  currency: 'RUB',
  availability: 'Наличие и условия уточняются',
  image: lightImage,
  exhibitionImage
}

export const RELATED_ARTWORKS = [
  {
    id: 'the-room',
    title: 'The room',
    artist: 'Анна Гончарова',
    year: '2025',
    medium: 'Холст, масло',
    dimensions: '80 × 80 см',
    image: theRoomImage
  },
  {
    id: 'movement',
    title: 'Movement',
    artist: 'Анна Гончарова',
    year: '2025',
    medium: 'Баннерная ткань, масло, акрил',
    dimensions: '80 × 120 см',
    image: movementImage
  },
  {
    id: 'perspective',
    title: 'Perspective',
    artist: 'Анна Гончарова',
    year: '2025',
    medium: 'Холст, масло',
    dimensions: '85 × 100 см',
    image: perspectiveImage
  }
]
