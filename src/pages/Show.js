import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";


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
                    value={editForm.author}
                    name="author"
                    placeholder="Author"
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
                    placeholder="Movie Cover Image"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Brief Description"
                    onChange={handleChange}
                />
                <StarRating handleChange={handleChange}/>
                </fieldset>
                <div className="form-btns">
                    <input type="submit" value="Update Movie" />
                    <button id="delete" onClick={removeMovie}><i id="trash-can-icon" class="fa fa-trash"></i> Delete Movie</button>
                </div>
            </form>
        )

        return (
            <div className="movie-show">
                <div className="show-container">
                    <img src={movie.coverImage} alt={movie.title}/>
                    <div className="show-details">
                        <h1>{movie.title}</h1>
                        <h2> {movie.director}</h2>
                        <h4>{movie.description}</h4>
                        <p>{movie.genre}</p>
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