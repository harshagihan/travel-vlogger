import React, { Component } from "react";

import './Cards.css';

function Card(props) {
    return(
        <>
            <li className='cards__item'>
                    <figure className='cards__item__pic-wrap'>
                        <img src={process.env.PUBLIC_URL+ `/images/${props.img}`} alt='Travel Image'
                             className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.name}</h5>
                        <h5 className='cards__item__text'>{props.des}</h5>
                    </div>
            </li>
        </>
    )
}
export default Card;