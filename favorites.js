
import React, { Component } from 'react';
class Favorite extends Component {
constructor(props) {
    super(props);
    this.state = {moviePref: 0};
  }

  render(){


    return (



    <ol className='favorites'>

     
      
      { 
      
      this.props.profiles.map((profile)=>{
       const userName = this.props.users[profile.userID].name;
       const movieProp = this.props.movie
     
      if (profile.favoriteMovieID == movieProp.id) 
    {
       return (  
      <li key={profile.id}>{userName}'s favorite movie is {this.props.movie.name}</li>
      );
    }
    else
    {
      this.state.moviePref = this.state.moviePref + 1;
      if (this.state.moviePref == 6)
      {
       return (  
        <li key={profile.id}>{this.props.movie.name} has no people who selected it as their favorite :( </li>
       );
      }
  }
        
    

  })}


    </ol>


)

}



}

export default Favorite;