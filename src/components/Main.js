import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {
    
    const [movies, setMovies] = useState(null)
    const URL = "https://bscapstone-backend.herokuapp.com/movies"

    // Calls backend API to get movie list
    const getMovies = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data)
    }

    // Adds a new movie 
    const createMovie = async (newMovie) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        })
        getMovies()
    }

    // Updates a movie
    const updateMovie = async (movie, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        getMovies()
    }

    // Deletes a movie 
    const deleteMovie = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
        getMovies()
    }

    useEffect(() => getMovies(), [])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                <Index movies={movies} createMovie={createMovie} />
                }/>
                <Route path="/movies/:id" element={<Show movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie}/>}/>
            </Routes>
        </main>
    )
}

export default Main