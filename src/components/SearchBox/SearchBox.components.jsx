import React from 'react';
import './SearchBox.style.css'

export const SearchBox = ({ placeholder, handleChange})=>(
    <input
     id="search"
     type="search"
     placeholder={placeholder}
     onChange={handleChange}
    />
)


