## Capstone Project -- Movie List
### Built by Bijan Saniee

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DESCRIPTION
This application serves as a platform users can use to add movies directly to my "list". 
After years of stating "such and such is on my list", the user now has a navigable webpage whereby friends
and acquaintances can deliver recommendations. 

## COMPONENTS
- Header 
- Main

## PAGES
- Index
- Show

## REACT COMPONENT ARCHITECTURE
```
-> App
  -> Header
  -> Main |state: movies|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: movies, createMovie|
      -> Route |path="/movies/:id|
        -> Show |Props: movies, updateMovie, deleteMovie|
```

## REACT ROUTER ROUTE TABLE
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all movies (index)||
| / | Index | post | recommending a new movie (create) |
| /movies/:id | Show | put | updating a movie's elements (update) |
| /movies/:id | Show | delete | remove a movie (destroy) |

## TECHNOLOGIES
- React
- React-Router
- Styled-Components 