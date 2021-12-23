import { useState } from "react"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal";


const Index = (props) => {
    
    const [newForm, setNewForm] = useState({
        title: "",
        director: "",
        genre: "",
        coverImage: "",
        description: ""
    })

    const [searchValue, setSearchValue] = useState("")

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createMovie(newForm)
        setNewForm({
            title: "",
            director: "",
            genre: "",
            coverImage: "",
            description: ""
        })
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Add a new Movie!</legend>
            <div className="flex-pair">
                <label for="title">Title</label>
                <input 
                    type="text"
                    value={newForm.title}
                    name="title"
                    id="title"
                    // placeholder="Movie Title"
                    onChange={handleChange}
                />
            </div>
            <div className="flex-pair">
                <label for="director">Director</label>
                <input 
                    type="text"
                    value={newForm.director}
                    name="director"
                    id="director"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label for="genre">Genre</label>
                <input 
                    type="text"
                    value={newForm.genre}
                    name="genre"
                    id="genre"
                    // placeholder="Genre"
                    onChange={handleChange}
                />
            </div> 

            <div className="flex-pair">
                <label for="coverImage">Movie Poster</label>
                <input 
                    type="text"
                    value={newForm.coverImage}
                    name="coverImage"
                    id="coverImage"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label for="description">Description</label>
                <input 
                    type="text"
                    value={newForm.description}
                    name="description"
                    id="description"
                    // placeholder="Brief Description"
                    onChange={handleChange}
                />
            </div>
            </fieldset>
            <input type="submit" value="Add Movie" id="add"/>
        </form>
    )

    if (props.movies) {
        return (
            <section>
                {form}
                <input type="search" placeholder="Search Titles or Directors" onChange={(event) => setSearchValue(event.target.value)}/>
                <div className="movie-container">
                    <Fade triggerOnce>
                    {props.movies.filter((movie) => {
                        if (searchValue === "") return movie
                        else if (movie.title.toLowerCase().includes(searchValue.toLowerCase())) return movie
                        else if (movie.director.toLowerCase().includes(searchValue.toLowerCase())) return movie
                    })
                    .map((movie) => {
                        return (<div key={movie._id} className="movie">
                            <Link to={`/movies/${movie._id}`}>
                                <img src={movie.coverImage}/>
                                <div className="movie-details">
                                    <h1>{movie.title}</h1>
                                    <h2>by {movie.director}</h2>
                                </div>
                            </Link>
                        </div>)
                    })}
                    </Fade>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                {form}
                <h1>Loading...</h1>
            </section>
        )
    }
}

export default Index