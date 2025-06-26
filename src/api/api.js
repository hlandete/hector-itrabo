import { ENDPOINT, API_KEY } from '../constants'

export const fetchDiscoverMovies = async () => {
  const URL = `${ENDPOINT}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error('Failed to fetch discover movies')
  }
  return response.json()
}

export const fetchSearchMovies = async (query) => {
  const URL = `${ENDPOINT}/search/movie?api_key=${API_KEY}&query=${query}`
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error('Failed to fetch search results')
  }
  return response.json()
}

export const fetchMovieDetails = async (id) => {
  const URL = `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error('Failed to fetch movie details')
  }
  return response.json()
}