import citiesListReducer from './citiesList-reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { save } from "redux-localstorage-simple"

let reducers = combineReducers({
    citiesList :  citiesListReducer,
});

let configureStore = (preloadedState) => (
    createStore(
        reducers,
        preloadedState,
        applyMiddleware(save({namespace: 'weather-app'}))
    )
);

let store = configureStore({});


export default store;