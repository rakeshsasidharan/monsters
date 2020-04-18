import React from 'react';
import './searchBox.style.css'

export const SearchBox = function({placeholder, changeHandler}){
    return(
        <input 
            className='search'
          type='search' 
          placeholder={placeholder}
          onChange={changeHandler}
          ></input>
    )
}