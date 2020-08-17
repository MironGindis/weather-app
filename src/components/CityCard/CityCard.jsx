import React from 'react';
import classes from './CityCard.module.css';
import  humidity from './../../assets/images/humidity.svg';
import  pressure from './../../assets/images/pressure.svg';
import  wind from './../../assets/images/wind.svg';
import  sunrise from './../../assets/images/sunrise.svg';
import  sunset from './../../assets/images/sunset.svg';
import  daytime from './../../assets/images/daytime.svg';
import arrUp from './../../assets/images/arrowUp.svg';
import arrDown from './../../assets/images/arrowDown.svg';

let CityCard = (props) => {
    let options ={timeZone : 'UTC', hour12: true,  hour : 'numeric', minute : 'numeric' };
    return <div className={classes.CityCard}>
        { (JSON.stringify(props.ActiveCity) === '{}')? null : 
        <div className={classes.CityInfo}>
            <div>{props.ActiveCity.name}</div>
            
            <div className={classes.WeatherCityInfo}>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={`http://openweathermap.org/img/wn/${props.ActiveCity.weather[0].icon}@2x.png`} alt='weather'/>
                    <div className={classes.FirstItem}>
                    {props.ActiveCity.weather[0].main}
                    </div>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <div className={classes.MainWeatherCityInfoItem}>
                        {Math.round(props.ActiveCity.main.temp)}<span>°C</span>
                    </div>
                </div>
                <div className={`${classes.WeatherCityInfoItem}` +' '+`${classes.MinMaxTemp}`}>
                    <div>
                        {Math.round(props.ActiveCity.main.temp_max)}°C
                        <div><img src={arrUp} alt=""/></div>
                    </div>
                   <div>
                        {Math.round(props.ActiveCity.main.temp_min)}°C
                        <div><img src={arrDown} alt=""/></div>
                        
                   </div>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={humidity} alt='humidity'/>
                    {props.ActiveCity.main.humidity}%
                    <span>humidity</span>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={pressure}  alt='pressure'/>
                    {props.ActiveCity.main.pressure/1000} mBar
                    <span>pressure</span>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={wind}  alt='wind'/>
                    {Math.round(props.ActiveCity.wind.speed/1000*3600)} km/h
                    <span>wind</span>
                </div >
                <div className={classes.WeatherCityInfoItem}>
                    <img src={sunrise}  alt='sunrise'/>
                    {new Date((props.ActiveCity.sys.sunrise+props.ActiveCity.timezone)*1000).toLocaleTimeString('en-GB', options)}
                    <span>sunrise</span>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={sunset}  alt='sunset'/>
                    {new Date((props.ActiveCity.sys.sunset+props.ActiveCity.timezone)*1000).toLocaleTimeString('en-GB', options)}
                    <span>sunset</span>
                </div>
                <div className={classes.WeatherCityInfoItem}>
                    <img src={daytime}  alt='daytime'/>
                    {new Date((props.ActiveCity.sys.sunset - props.ActiveCity.sys.sunrise)*1000).getUTCHours()}h {new Date((props.ActiveCity.sys.sunset - props.ActiveCity.sys.sunrise)*1000).getUTCMinutes()}m
                    <span>daytime</span>
                </div>
            </div>
        </div>}
        
    </div>
}
export default CityCard;