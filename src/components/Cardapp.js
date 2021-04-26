import React, { Component } from "react";
import Cardlist from './Cardlist';
import SearchBox from "./SearchBox";
import './Cards.css';


class CardApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countrys : [
                {name: 'Anuradapura', des: 'Anuradapura Explore the hidden waterfall deep inside the Amazon Jungle' ,img:'img-2.jpg'},
                {name: 'kandy', des: 'kandy Explore the hidden waterfall deep inside the Amazon Jungle' ,img:'img-3.jpg'},
                {name: 'Galle', des: 'Galle the hidden waterfall deep inside the Amazon Jungle' ,img:'img-4.jpg'},
                {name: 'Rathnapura', des: 'Rathnapura the hidden waterfall deep inside the Amazon Jungle' ,img:'img-5.jpg'},
                {name: 'Malabe', des: ' Malabe Explore the hidden waterfall deep inside the Amazon Jungle' ,img:'img-6.jpg'},
                {name: 'Kegalle', des: 'Kegalle Explore the hidden waterfall deep inside the Amazon Jungle' ,img:'img-7.jpg'},
                {name: 'Mathara', des: 'Mathara the hidden waterfall deep inside the Amazon Jungle' ,img:'img-8.jpg'},
                {name: 'Awissawella', des: 'Awissawella the hidden waterfall deep inside the Amazon Jungle' ,img:'img-9.jpg'}
            ],
            searchCountry: ''
        }
    }
    handleInput = (e) => {
        console.log(e.target.value);
        this.setState( { searchCountry: e.target.value})
    }

    render() {
        let filteredCountrys = this.state.countrys.filter((country) => {
            return country.name.toLowerCase().includes(this.state.searchCountry.toLowerCase())
        })
        return(

            <div className='cards'>
                <h1>Check out these Epic Destinations!</h1>
                <SearchBox handleInput={this.handleInput}/>
                <div className='cards'>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <Cardlist filteredCountrys={filteredCountrys}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardApp;