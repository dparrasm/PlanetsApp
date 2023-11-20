import { useEffect, useState } from 'react'
import { Planet } from '../domain/Planet'
import { PlanetsEndpoint } from '../services/PlanetsEndpoint'

export default function usePlanets() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [planets, setPlanets] = useState<Planet[]>([])

  const loadPlanets = (planets: Planet[]) => {
    setPlanets(planets)
  }

  const handleFavorite = (planetName: string) => {
    const updatedPlanets: Planet[] = planets.map((p) =>
      p.name === planetName ? { ...p, favorite: !p.favorite } : p
    )
    setPlanets(updatedPlanets)
  }

  const sortPlanets = ({
    sortBy,
    orderAsc
  }: {
    sortBy: string
    orderAsc: boolean
  }) => {
    const updatedRows = [...planets].sort((a, b) => {
      const valueA = parseInt(a[sortBy], 10) || 0
      const valueB = parseInt(b[sortBy], 10) || 0

      return orderAsc ? valueA - valueB : valueB - valueA
    })
    setPlanets(updatedRows)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await PlanetsEndpoint.getAll({ page: 1 })
        setPlanets(result.map((r: Planet) => ({ ...r, favorite: false })))
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching planets:', error)
        throw error
      }
    }

    fetchData()
  }, [])

  return { planets, loadPlanets, isLoading, handleFavorite, sortPlanets }
}
