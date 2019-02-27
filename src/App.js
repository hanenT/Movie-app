import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import AddMovie from './addmovie-list.js';
import './App.css';
import Rating from './rating';

class App extends Component {
  state={
    movies: [
      {
        
        image: "https://cdn.egy.best/serve/movies/art-2191006493-x300.jpg",
        title: "Aquaman",
        productionyear: "2018",
        rating: 3
      },
      {
        
        image: "https://cdn.egy.best/serve/movies/art-2054200811-x300.jpg",
        title: "Creed II",
        productionyear: "2018",
        rating: 4
      },
      {
        
        image: "https://cdn.egy.best/serve/movies/art-2232323379-x300.jpg",
        title: "Instant Family",
        productionyear: "2018",
        rating: 5
      },
      {
        
        image: "https://cdn.egy.best/serve/movies/art-0030279873-x300.jpg",
        title: "Pride & Prejudice",
        productionyear: "2005",
        rating: 4
      },
      {
  
        image: "https://cdn.egy.best/serve/movies/art-0008844914-x300.jpg",
        title: "The Illusionist",
        productionyear: "2006",
        rating: 4
      },
      {
        image: "https://cdn.egy.best/serve/movies/art-2232309209-x300.jpg",
        title: "Ben Is Back",
        productionyear: "2018",
        rating: 4
      }
    ],
    filter: '',
    indexChecked: -1
  }

  // let newMovies = this.state.movies
    // newMovies.push(movie)
    // this.setState({
    //   movies: newMovies
    // })

    //ADD MOVIE
  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  //FILTER MOVIES
  onFilterChange = (filter) => {
    this.setState({
      filter
    })
  }
  /*setSearchTerm = (rating) => {
    this.setState({rating});
  };*/

  onClickFn = i => {
    this.setState({
      indexChecked: i
    });
  };

  render() {
    const { movies, filter,indexChecked} = this.state
    return (
      <div className="app">
      <input className="search" onChange={(e) => this.onFilterChange(e.target.value)} //onChange={(e) => this.setSearchTerm(e.target.value)}
       value={filter} type="text" placeholder="search" />
       <div className="rating-filter">
          <span className="rating-filter-text">Minimum rating</span>
          <Rating
            onClickFn={({ i }) => this.onClickFn(i)}
            indexChecked={indexChecked}
          />
        </div>
        <div className="movies">
        {
          /*movies
          .rating(movie =>{
            return movie.rating.includes(rating)
          })*/
          
          movies
          .filter(movie => {
            return movie.title.includes(filter)
          })

          .map(movie => (
            <MovieCard 
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            productionyear={movie.productionyear}
            />
          ))
        }
        </div>
        
      <AddMovie 
        addMovie={this.addMovie}
      />
      </div>
    
    )
  }
}

export default App;