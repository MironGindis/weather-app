import { connect } from 'react-redux';
import CitiesList from './CitiesList';
import {deleteCity, updateSearchCity, updateSearchList, addCity,setActiveCity,deleteSearchList} from './../../Redux/citiesList-reducer';

let mapStateToProps = (state) => ({
    MyCities : state.citiesList.MyCities,
    SearchCity : state.citiesList.SearchCity,
    SearchList : state.citiesList.SearchList,
    ActiveCity : state.citiesList.ActiveCity,
}) 

export default connect(mapStateToProps, {
    deleteCity,
    updateSearchCity,
    updateSearchList,
    addCity,
    setActiveCity,
    deleteSearchList,
})(CitiesList);