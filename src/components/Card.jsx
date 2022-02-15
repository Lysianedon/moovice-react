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
            title : this.props.title,
            yearRelease : this.props.yearRelease,
            description : this.props.description
        })

    }

    render() {
        return (
            <div >
                <ul className='card'
                style={{border : "1px solid black", 
                            margin : "auto", 
                            width : "50%", 
                            height : "75%", 
                            marginTop : "10%"}}>

                    <img src={this.props.poster} alt="poster movie" style={{maxWidth: "50%",}}/>
                    <li>{this.state.title}</li>
                    <li>{this.state.yearRelease}</li>
                    <li>{this.state.description}</li>
                </ul>
            </div>
        )
    }
}
