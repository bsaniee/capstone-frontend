import { useState } from "react"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal";
import styled from "styled-components"


const Image = styled.img`
    width: 100px;
    float: center;
    box-shadow: 8px 10px 16px 0 rgb(0 0 0 / 20%)
`;

const Details = styled.div`
font-size: 10px;
`;

const Home = styled.section`
    background-color: lightblue;
    margin: 10px;
    
`
const Field = styled.div`
    text-align: left;
    margin-left: 20px;
    background-color: lightblue;
    margin-bottom: 5px;
`

const Field2 = styled.fieldset`
    background-color: lightblue;
`
const Inputs = styled.input`
    text-align: left;
    margin-bottom: 100px;
    box-shadow: 8px 10px 16px 0 rgb(0 0 0 / 20%)
    background: white;
    border-radius: 3px;
    border: 2px solid maroon;
    color: maroon;
    padding: 0.25em 1em;
`


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
            <Field2>
            <legend>Add a new Movie!</legend>
            <Field>
                <label for="title">Title</label>
                <input 
                    type="text"
                    value={newForm.title}
                    name="title"
                    id="title"
                    placeholder="Movie Title"
                    onChange={handleChange}
                />
            </Field>
            <Field >
                <label for="director">Director</label>
                <input 
                    type="text"
                    value={newForm.director}
                    name="director"
                    id="director"
                    placeholder="Director"
                    onChange={handleChange}
                />
            </Field>

            <Field>
                <label for="genre">Genre</label>
                <input 
                    type="text"
                    value={newForm.genre}
                    name="genre"
                    id="genre"
                    placeholder="Genre"
                    onChange={handleChange}
                />
            </Field> 

            <Field>
                <label for="coverImage">Movie Poster</label>
                <input 
                    type="text"
                    value={newForm.coverImage}
                    name="coverImage"
                    id="coverImage"
                    placeholder="Poster URL"
                    onChange={handleChange}
                />
            </Field>

            <Field>
                <label for="description">Description</label>
                <input 
                    type="text"
                    value={newForm.description}
                    name="description"
                    id="description"
                    placeholder="Synopsis"
                    onChange={handleChange}
                />
            </Field>
            </Field2>
            <Inputs type="submit" value="Add Movie" id="add"/>
        </form>
    )

    if (props.movies) {
        return (
            <div>
                {form}
                <input type="search" placeholder="Search Titles or Directors" onChange={(event) => setSearchValue(event.target.value)}/>
                <Home>
                    <Fade triggerOnce>
                    {props.movies.filter((movie) => {
                        if (searchValue === "") return movie
                        else if (movie.title.toLowerCase().includes(searchValue.toLowerCase())) return movie
                        else if (movie.director.toLowerCase().includes(searchValue.toLowerCase())) return movie
                    })
                    .map((movie) => {
                        return (<div key={movie._id} className="movie">
                            <Link to={`/movies/${movie._id}`}>
                                <Image src={movie.coverImage}/>
                                <Details className="movie-details">
                                    <h2>{movie.title}</h2>
                                    <h1>A film by {movie.director}</h1>
                                </Details>
                            </Link>
                        </div>)
                    })}
                    </Fade>
                </Home>
            </div>
        )
    } else {
        return (
            <Home>
                {form}
                <h1>Loading...</h1>
            </Home>
        )
    }
}

export default Index