import React, { Component } from 'react';
import Favorite from './favorites.js';







class MovieList extends Component {



  render(){



 //   console.log('props', this.props.usersList.map((user)=>{return user.name}));



    return (



    <ol className='userList'>



      { this.props.moviesList.map((movie)=>(
      <li key={movie.id}>Users who's favorite movie is {movie.name} : <Favorite users={this.props.users} movie={movie} profiles={this.props.profiles} moviePref={0}/> </li>
    ))}
   </ol>
)

}



}

export default MovieList;