import React, { Component } from 'react'
import Card from '../components/Card';

export default class PopularBattle extends Component {

    constructor(){

        super();

        this.state = {
            movies : [],
            movie1 : {},
            movie2 : {},
            currentBattle : 0,
        }
    }

    componentDidMount(){

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcab3683c270f0eed6dc788a93c2e943')
        .then(res => res.json())
        .then(res => {

            const allmovies = res.results;
            this.setState({movies : allmovies})
            console.log("all movies : ", allmovies);

            this.setState({
                movie1 : allmovies[0],
                movie2 : res.results[1],
            })

            console.log("test movie 1:", this.state.movie1, "test movie 2: ", this.state.movie2);

        })
    }
    render() {
        return (

            <div>
                <h1 style={{textAlign : "center"}}>Popular Battle : </h1>

            <div style={{display : "flex", alignItems : "center", justifyContent:"space-around"}}>

                <Card 
                    title={this.state.movie1.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie1.poster_path}`}
                    yearRelease={this.state.movie1.release_date} 
                    description={this.state.movie1.overview}
                    />
                <h3>VS</h3>
                <Card 
                    title={this.state.movie2.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie2.poster_path}`}
                    yearRelease={this.state.movie2.release_date} 
                    description={this.state.movie2.overview}
                    />


            </div>
            </div>
        )
    }
}
