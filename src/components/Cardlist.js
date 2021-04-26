import React, { Component } from "react";
import Card from './Card';

function Cardlist(props) {
    let countrys = props.filteredCountrys.map((country,i) =>{
        return <Card key={i} name={country.name} des={country.des} img={country.img}/>

    })
    return (
        <div>
            {countrys}
        </div>
    )
}

export default Cardlist;
