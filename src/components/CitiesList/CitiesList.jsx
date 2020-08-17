import React from 'react';
import classes from './CitiesList.module.css';
import Search from './Search/Search';
import deleteicon from './../../assets/images/deleteicon1.svg';

let CitiesList = (props) => {
    let onDeleteClick = (id) => {
        props.deleteCity(id);
    }
    let onSearchListCityClick = (newCity) => {
        let isCityRepeat= false;
        props.MyCities.forEach(element => {
            isCityRepeat = isCityRepeat || (element.id === newCity.id);
        });
        if (!isCityRepeat) {
            props.addCity(newCity);
        }
        props.updateSearchCity('');
        props.deleteSearchList();
    }
    let onCityClick = (newAcriveCity)=> {
        props.setActiveCity(newAcriveCity);
    } 
    return <div className={classes.CitiesList}>
        <Search SearchCity={props.SearchCity} updateSearchCity={props.updateSearchCity} SearchList={props.SearchList} updateSearchList={props.updateSearchList}/>
        <div className={classes.SearchList}>
        {(props.SearchList.length >=0) ?  props.SearchList.map( item => {
            return <div onClick={() => onSearchListCityClick(item)} key={item.id}>
                {item.name}, {item.sys.country}
            </div>
        })
        : null
    }   
        </div>
        {props.MyCities.map( item => {
            return <div onClick={() => onCityClick(item)} key={item.id} className={(item.id === props.ActiveCity.id) ? classes.MyCitiesItem+' '+classes.active : classes.MyCitiesItem}>
                {item.name}, {item.sys.country} {Math.round(item.main.temp)}°C
                <div className={classes.image} onClick={() =>onDeleteClick(item.id)}>
                    <img src={deleteicon}/>
                </div>
            </div>
        } )}
    </div>
}

export default CitiesList;