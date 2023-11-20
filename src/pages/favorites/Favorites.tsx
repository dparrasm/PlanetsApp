import { useEffect, useState } from 'react'
import Gallery from '../../components/gallery/Gallery'
import { Planet } from '../../domain/Planet'
import Topbar from '../../components/topbar/Topbar'

interface FavoritesProps {
  data: Planet[]
  handleFavorite: (name: string) => void
}
export default function Favorites({
  data,
  handleFavorite
}: FavoritesProps): JSX.Element {
  const [cards, setCards] = useState<Planet[]>(data)

  useEffect(() => {
    const favorites: Planet[] = data.filter((c) => c.favorite)
    setCards(favorites)
  }, [data])

  return (
    <>
      <Topbar title={'Favorites'} />
      <Gallery cards={cards} handleFavorite={handleFavorite} />
    </>
  )
}
