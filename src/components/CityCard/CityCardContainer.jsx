import { connect } from 'react-redux';
import CityCard from './CityCard';

let mapStateToProps = (state) => ({
    ActiveCity : state.citiesList.ActiveCity,
}) 

export default connect(mapStateToProps, {})(CityCard);