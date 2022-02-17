import React, { Component } from 'react'
import Card from '../components/Card';
import Moment from 'react-moment';
import moment from 'moment';



export default class Weekly extends Component {
    constructor(){
        super();
        
        this.state = {
            
            movies : [],
            date : new Date(),
            
        }
    }

    componentDidMount(){

        const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD"); 
        const today =  moment().format("YYYY-MM-DD");
        console.log("today", today);
        

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=bcab3683c270f0eed6dc788a93c2e943`)
        .then(res => res.json())
        .then(res => {
            this.setState({movies : res.results})
            console.log("movies : ", this.state.movies);

        })
    }

    render() {
      
        
        return (
            <div>
                <h1>Weekly :</h1>
                {/* <Moment format='DD MMMM' subtract={{ days: 7}}>{this.state.date}</Moment> */}

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
