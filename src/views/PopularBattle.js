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
            favorites : [],
            displayEnd : false,
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
                movie2 : allmovies[this.state.currentBattle + 1],
            })

            console.log(" movie 1:", this.state.movies.indexOf(this.state.movie1), "test movie 2: ",  this.state.movies.indexOf(this.state.movie2));
            
            //Selecting my cards and adding an event listener to it : when we click on one of the cards, the next two movies are displayed as a duel

            const cards = Array.from(document.querySelectorAll('.card'));

            cards.forEach(card => {

                card.addEventListener('click', (e) => {

                    if (this.state.currentBattle !== 18) {

                        //WHEN THE USER CLICK ON A MOVIE, ITS ID IS ADDED TO HIS FAVORITES : 

                        //Getting the current card's titles and the current movie's titles from the whole list in order to compare them : if the clicked card's title is the same as the movie's title key, it means that they correspond. And so, we add the movie's id to the favorites array : 

                        let titleMovie1 = this.state.movie1.title;
                        let titleMovie2 = this.state.movie2.title;
                        let titleCard = card.firstChild.nextSibling.textContent;

                        if (titleCard === titleMovie1) {
                            console.log("choix movie 1");
                            const copyFavorites = this.state.favorites;
                            copyFavorites.push(this.state.movie1.id);
                            this.setState({favorites : copyFavorites})
                            // console.log(this.state.favorites);
                            // console.log(this.state.movie1);

                        } else if (titleCard === titleMovie2) {
                            console.log("choix movie 2");
                            const copyFavorites = this.state.favorites;
                            copyFavorites.push(this.state.movie2.id);
                            this.setState({favorites : copyFavorites})
                            // console.log(this.state.favorites);
                            // console.log(this.state.movie2);
                        }

                        //Getting the next two movies : 
                        this.setState((prevState) => ({
                            currentBattle : prevState.currentBattle + 2,
                            movie1 : allmovies[this.state.currentBattle + 2 ], 
                            
                            }))
                        
                        this.setState({movie2 : allmovies[this.state.currentBattle + 1 ] })
                        console.log(" movie 1:", this.state.movies.indexOf(this.state.movie1), "test movie 2: ",  this.state.movies.indexOf(this.state.movie2)); 

                    //If the list of movies is finished, display a notification message at the bottom of the page

                    } else {

                        this.setState({displayEnd : true})

                        setTimeout(() => {
                            this.setState({displayEnd : false})
                        }, 2500);
                    }
                    
                
                })
            } )


        })

    }


    
    render() {

        return (

            <div>
                <h1 style={{textAlign : "center"}}>Popular Battle : </h1>

            <div style={{display : "flex", alignItems : "center", justifyContent:"space-around"}}>

                <Card className="card"
                    title={this.state.movie1.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie1.poster_path}`}
                    yearRelease={this.state.movie1.release_date} 
                    description={this.state.movie1.overview}
                    id = {this.state.movie1.id}
                    />

                <h3>VS</h3>


                <Card className="card"
                    title={this.state.movie2.title} 
                    poster={`https://image.tmdb.org/t/p/w300/${this.state.movie2.poster_path}`}
                    yearRelease={this.state.movie2.release_date} 
                    description={this.state.movie2.overview}
                    id = {this.state.movie2.id}
                    />

            </div>

            {
                        this.state.displayEnd ? 

                        ( 
                        <p>Vous avez parcouru tous les films !</p> )
                        :
                        (null)
                    }

            </div>
        )
    }
}