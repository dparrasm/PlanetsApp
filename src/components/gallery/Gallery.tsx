import { useEffect } from 'react'
import { Planet } from '../../domain/Planet'
import Card from '../card/Card'
import './Gallery.scss'

interface GalleryProps {
  cards: Planet[]
  handleFavorite: (name: string) => void
}

export default function Gallery({
  cards,
  handleFavorite
}: GalleryProps): JSX.Element {
  return (
    <>
      <section className="gallery-grid">
        {cards.map((c, index) => (
          <Card
            key={index}
            title={c.name}
            info={[`Climate: ${c.climate}`, `Diameter: ${c.diameter}`]}
            removeCard={() => handleFavorite(c.name)}
          />
        ))}
      </section>
    </>
  )
}
