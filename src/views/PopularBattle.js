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
        //Bind functions
        // this.showNextMovies = this.showNextMovies.bind(this);
    }

    // showNextMovies(){

    //     const cards = Array.from(document.querySelectorAll('.card'));

    //     cards.forEach(card => {

    //         card.addEventListener('click', () => {
    //             console.log("coucou");
    //         })
    //     } )

    //     console.log(this.state.movies);
    // }


    componentDidMount(){

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcab3683c270f0eed6dc788a93c2e943')
        .then(res => res.json())
        .then(res => {

            const allmovies = res.results;
            this.setState({movies : allmovies})
            console.log("all movies : ", this.state.movies);

            this.setState({
                movie1 : allmovies[this.state.currentBattle],
                movie2 : res.results[this.state.currentBattle + 1],
            })

            console.log(" movie 1:", this.state.movies.indexOf(this.state.movie1), "test movie 2: ",  this.state.movies.indexOf(this.state.movie2));
         const cards = Array.from(document.querySelectorAll('.card'));

         cards.forEach(card => {

             card.addEventListener('click', () => {
                 
               this.setState((prevState) => ({
                   currentBattle : prevState.currentBattle + 2,
                   movie1 : allmovies[this.state.currentBattle + 2 ],
                   
                }))
                
                this.setState({movie2 : allmovies[this.state.currentBattle + 1 ] })
                console.log("coucou");
                console.log(" movie 1:", this.state.movies.indexOf(this.state.movie1), "test movie 2: ",  this.state.movies.indexOf(this.state.movie2));
              
             })
         } )


        })

    }


    
    render() {

        return (

            <div>
                <h1 style={{textAlign : "center"}}>Popular Battle : </h1>

            <div style={{display : "flex", alignItems : "center", justifyContent:"space-around"}}>

                {/* <Card className="card"
                    title={this.state.movies[this.state.currentBattle].title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle].poster_path}`}
                    yearRelease={this.state.movies[this.state.currentBattle].release_date} 
                    description={this.state.movies[this.state.currentBattle].overview}
                    /> */}

                <Card className="card"
                    title={this.state.movie1.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie1.poster_path}`}
                    yearRelease={this.state.movie1.release_date} 
                    description={this.state.movie1.overview}
                    />

                <h3>VS</h3>


                <Card className="card"
                    title={this.state.movie2.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie2.poster_path}`}
                    yearRelease={this.state.movie2.release_date} 
                    description={this.state.movie2.overview}
                    />

                {/* <Card className="card"
                    title={this.state.movies[this.state.currentBattle + 1].title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle + 1].poster_path}`}
                    yearRelease={this.state.movies[this.state.currentBattle + 1].release_date} 
                    description={this.state.movies[this.state.currentBattle + 1].overview}
                    /> */}

            </div>

            {/* {this.showNextMovies()} */}
            </div>
        )
    }
}