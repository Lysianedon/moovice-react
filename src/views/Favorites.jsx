import React, { Component } from 'react'

export default class Favorites extends Component {

    constructor(){

        super();

        this.state = {
            movies : [],
            favIDs : this.getStorage(),
        }

        //Bind functions
        this.getStorage = this.getStorage.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }

    getStorage(){

        const favArray = localStorage.getItem("fav").split(",");
        // console.log('favarray', favArray);
        return favArray;
    }

    getMovie(id){

        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=bcab3683c270f0eed6dc788a93c2e943`)
        .then(res => res.json())
        .then(res => {

            const favoritemovie = res;
            // const favmovie = favoritemovies.find(movieid => id)      
            console.log("test fav movie");

            const copyArray = this.state.movies;
            copyArray.push(favoritemovie);

            this.setState({
                movies : copyArray,
            })
        })
    }


    render() {
        return (
            <div>
                <h1>Favorites : {this.state.favIDs}</h1>
                
                {this.getStorage()}
                {/* {this.getMovie()} */}
            </div>
        )
    }
}
