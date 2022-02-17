import React, { Component } from 'react'
import Card from '../components/Card';

export default class Popular extends Component {

    constructor(){
        super();
        
        this.state = {
            
            movies : [],
        }
    }

    componentDidMount(){

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcab3683c270f0eed6dc788a93c2e943')
        .then(res => res.json())
        .then(res => {
            this.setState({movies : res.results})
            console.log("movies : ", this.state.movies);

        })
    }

    render() {
        return (
            <div>
                <h1>Popular : </h1>

                {
      
                    this.state.movies.map((movie,i) => {
            
                        if (i < 20) {
                            
                            return <Card 
                            title={movie.title} 
                            poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            yearRelease={movie.release_date} 
                            description={movie.overview}/>
                            
                        }

                        return null;
                    })
                }
            </div>
        )
    }
}
