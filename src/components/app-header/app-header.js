import React from 'react';
import './app-header.css';

const AppHeader = ({name , surname , allPosts , liked})=>{
    return (
        <div className="app-header d-flex">
            <h1>{name} {surname}</h1>
            <h2>{allPosts} записей, из них понравилась {liked} </h2>
        </div>
    )
}

export default AppHeader;