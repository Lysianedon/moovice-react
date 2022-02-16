import React, { Component } from 'react'

export default class Card extends Component {

    constructor(){
        super();

        this.state = {
            poster :"",
            title : "",
            yearRelease : "",
            description : "",


        }
    }

    componentDidMount(){

        this.setState({
            poster : "https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" ,

        })

    }

    render() {
        return (
            <div >
                <ul className='card'
                style={{border : "1px solid black", 
                            margin : "auto", 
                            width : "40vw", 
                            height : "75%", 
                            marginTop : "10%",
                            
                            }}>

                    <img src={this.props.poster} alt="poster movie" style={{maxWidth: "40%",}}/>
                    <li>{this.props.title}</li>
                    <li>{this.props.yearRelease}</li>
                    <li>{this.props.description}</li>

                </ul>
            </div>
        )
    }
}
