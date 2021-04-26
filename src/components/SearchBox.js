import React, { Component } from 'react';
import './SearchBox.css'


function SearchBox(props) {

    return(
        <div className='input-areas'>
            <div>
                <input  onChange={props.handleInput}
                        type='text'
                       className='cards-input'
                       placeholder='Search'
                />
            </div>
        </div>

    )
}
export default SearchBox;
