import React from 'react';
import * as axios from 'axios';
import classes from './Search.module.css';
import Searchicon from './../../../assets/images/search.svg';

let Search = (props) => {
    let onSearchCityChange = (e) => {
        props.updateSearchCity(e.currentTarget.value);
    }
    let onSearchClick = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.SearchCity}&appid=6c62c31438bdefd80a830e6f0cf61a0f&units=metric`).then( response => {
            props.updateSearchList(response.data);
        }).catch(err => alert(err))
    }
    return <div className={classes.Search}>
        <textarea onChange={onSearchCityChange} value={props.SearchCity}/>
        <div className={classes.image} onClick={onSearchClick}>
            <img src={Searchicon}/>
        </div>
    </div>
}

export default Search;