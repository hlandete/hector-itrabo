import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchDiscoverMovies, fetchSearchMovies } from "../api/api"

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ query, page }) => {
    if (query) {
      return await fetchSearchMovies(query, page)
    } else {
      return await fetchDiscoverMovies(page)
    }
  })

const moviesSlice = createSlice({
    name: 'movies',
    initialState: { 
        movies: [],
        totalPages: 1, // Initialize totalPages
        fetchStatus: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            const movies = action.payload.results || [] 
            state.movies = [...state.movies, ...movies]
            state.totalPages = action.payload.total_pages || 1
            state.fetchStatus = 'success'
        }).addCase(fetchMovies.pending, (state) => {
            state.fetchStatus = 'loading'
        }).addCase(fetchMovies.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }
})

export default moviesSlice
