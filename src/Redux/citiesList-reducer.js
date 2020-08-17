import {load} from 'redux-localstorage-simple';

const DELETE_CITY = 'DELETE-CITY';
const UPDATE_SEARCH_CITY = 'UPDATE-SEARCH-CITY';
const UPDATE_SEARCH_LIST = 'UPDATE-SEARCH-LIST';
const ADD_CITY = 'ADD-CITY';
const SET_ACTIVE_CITY = 'SET-ACTIVE-CITY';
const DELETE_SEARCH_LIST = 'DELETE-SEARCH-LIST';
const SET_CURRENT_DATE = 'SET-CURRENT-DATE';


let initialState = load({namespace: 'weather-app'});
let options ={timeZone : 'UTC', hour12: true,  hour : 'numeric', minute : 'numeric' };

if (JSON.stringify(initialState) === '{}') {
    initialState.citiesList = {
        MyCities : [],
        SearchList : [],
        ActiveCity : {},
        SearchCity : '',
        CurrentDate : new Date(),
    }
}

let citiesListReducer = (state = initialState.citiesList , action) => {
    switch (action.type) {
        case (DELETE_CITY) : {
            let newMyCities = state.MyCities.filter( item => {
                return item.id!== action.id;
            });
            return {
                ...state,
                MyCities : newMyCities,
            }
        }
        case (UPDATE_SEARCH_CITY) : {
            return {
                ...state,
                SearchCity : action.newSearchCity,
            }
        }
        case (UPDATE_SEARCH_LIST) : {
            return {
                ...state,
                SearchList : [action.newSearchList],
            }
        }
        case (ADD_CITY) : {
            return {
                ...state,
                MyCities : [action.newCity, ...state.MyCities],
            }
        }
        case (SET_ACTIVE_CITY) : {
            return {
                ...state,
                ActiveCity : action.newAcriveCity,
            }
        }
        case (DELETE_SEARCH_LIST) : {
            return {
                ...state,
                SearchList : [],
            }
        }
        default : return state;
    }
}

export let deleteCity = (id) => {
    return {
        type : DELETE_CITY, id
    }
}
export let updateSearchCity = (newSearchCity) => {
    return {
        type : UPDATE_SEARCH_CITY, newSearchCity
    }
}
export let updateSearchList = (newSearchList) => {
    return {
        type : UPDATE_SEARCH_LIST, newSearchList,
    }
}
export let deleteSearchList = () => {
    return {
        type : DELETE_SEARCH_LIST,
    }
}
export let addCity = (newCity) => {
    return {
        type : ADD_CITY, newCity,
    }
}
export let setActiveCity = (newAcriveCity) => {
    return {
        type : SET_ACTIVE_CITY, newAcriveCity,
    }
}

export default citiesListReducer;