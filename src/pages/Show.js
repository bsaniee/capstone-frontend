import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import styled from "styled-components"

const Image = styled.img`
    width: 300px;
    box-shadow: 8px 10px 16px 0 rgb(0 0 0 / 20%);
`
const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid maroon;
  color: maroon;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const Input = styled.input`
background: white;
border-radius: 3px;
border: 2px solid maroon;
color: maroon;
margin: 0 1em;
padding: 0.25em 1em;
`

const Show = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const movies = props.movies;

    // state for edit form 
    const [editForm, setEditForm] = useState({})
    // useEffect to set state for existing movie when data is available
    useEffect(() => {
        if (props.movies) {
            // grab the specific movie
            const movie = movies.find((b) => b._id === id)
            setEditForm(movie)
        }
    }, [props.movies])


    if (props.movies) {
        // grab the specific Movie
        const movie = movies.find((b) => b._id === id)

        // handleChange function for form 
        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value
            setEditForm(newState)
            console.log(newState)
        }

        // handleSubmit function for form 
        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateMovie(editForm, movie._id)
            navigate("/")
        }

        // removes a movie
        const removeMovie = () => {
            props.deleteMovie(movie._id)
            navigate("/")
        }

        const form = (
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Edit Movie details</legend>
                <input 
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="Movie Title"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.director}
                    name="director"
                    placeholder="Director"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.genre}
                    name="genre"
                    placeholder="Genre"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.coverImage}
                    name="coverImage"
                    placeholder="Poster URL Here"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Brief Description"
                    onChange={handleChange}
                />
                </fieldset>
                <div className="form-btns">
                    <Input type="submit" value="Update Movie" />
                    <Button id="delete" onClick={removeMovie}> Delete Movie</Button>
                </div>
            </form>
        )

        return (
            <div className="movie-show">
                <div>
                    <Image src={movie.coverImage} alt={movie.title}/>
                    <div className="show-details">
                        <p>Title: {movie.title}</p>
                        <p>Director: {movie.director}</p>
                        <p>Synopsis: {movie.description}</p>
                        <p>Genre: {movie.genre}</p>
                    </div>
                </div>
                {form}
            </div>
        )
    }
    else {
        return <h1>No Movie Found</h1>
    }
}

export default Show