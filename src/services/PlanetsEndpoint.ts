import { Planet } from '../domain/Planet'

const getAll = async (filter: { page: number }): Promise<Planet[]> => {
  try {
    const { page } = filter
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    const data: { results: Planet[] } = await response.json()
    return data.results
  } catch (error) {
    console.error('Imposible to fetch planets', error)
    throw error
  }
}

export const PlanetsEndpoint = {
  getAll
}
