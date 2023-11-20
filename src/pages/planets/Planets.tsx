import { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import { Planet } from '../../domain/Planet'
import Topbar from '../../components/topbar/Topbar'
import FavoriteButton from '../../components/favoriteButton/FavoriteButton'

interface PlanetsProps {
  data: Planet[]
  handleFavorite: (name: string) => void
  sortTable: ({
    sortBy,
    orderAsc
  }: {
    sortBy: string
    orderAsc: boolean
  }) => void
}

export default function Planets({
  data,
  handleFavorite,
  sortTable
}: PlanetsProps): JSX.Element {
  const [rows, setRows] = useState<Planet[]>(data)

  useEffect(() => {
    const mappedRows: Planet[] = data.map((d) => ({
      ...d,
      favorite: (
        <FavoriteButton
          isFavorite={d.favorite}
          onClick={() => handleFavorite(d.name)}
        />
      )
    }))
    setRows(mappedRows)
  }, [data])

  return (
    <>
      <Topbar title={'Planets'} />
      <Table
        header={['name', 'climate', 'diameter', 'population', 'favorite']}
        rows={rows}
        sortTable={sortTable}
      />
    </>
  )
}
