import React from 'react';
import './weather.css'

const Weather = ({weather}) => {
    const time = (timestamp) => {
        const time = timestamp * 1000
        const date = new Date(time)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours} : ${minutes}`
    }
    const month = (timestamp) =>{
        const time = timestamp * 1000
        const date = new Date(time)
        const month = date.getUTCMonth()
        switch (month) {
            case 0:
                return 'January 1';
                break;
            case 1:
                return 'Februaly 2';
                break;
            case 2:
                return 'March 3';
                break;
            case 3:
                return 'April 4';
                break;
            case 4:
                return 'May 5';
                break;
            case 5:
                return 'June 6';
                break;
            case 6:
                return 'July 7';
                break;
            case 7:
                return 'August 8';
                break;
            case 8:
                return 'September 9';
                break;
            case 9:
                return 'November 10';
                break;
            case 10:
                return 'October 11';
                break;
            case 11:
                return 'December 12';
                break;
            default:
                return 'no month'
            }
        }
    return (
        <div className='box'>
            <p className='date'>{time(weather.dt)}, {month((weather.dt))}</p>
            <h1 className='name'>{weather.name},{weather.sys.country}</h1>
            <p>{weather.description}</p>
            <div className='temp'>
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=''/>
                <h3>{(weather.main.temp - 273.15).toFixed(1)} °C</h3>
            </div>
           <div className='info'>
               <div className='sun 1'>
                   <div className='left'>РАССВЕТ
                       <h2>{time(weather.sys.sunrise)}</h2>
                   </div>
                   <div className='right'>ЗАКАТ
                       <h2>{time(weather.sys.sunset)}</h2>
                   </div>
               </div>
               <div className='sun 2'>
                   <div className='left'>ВЕТЕР
                       <h2><span>{(weather.wind.speed)}m/s</span></h2>
                   </div>
                   <div className='right'>ОЩУЩАЕТСЯ
                       <h2>{(weather.main.feels_like - 273.15).toFixed()} °C</h2>
                   </div>
               </div>
               <div className='sun 3'>
                   <div className='left'>ВЛАЖНОСТЬ
                       <h2><span>{(weather.main.humidity)}%</span></h2>
                   </div>
                   <div className='right'>ДАВЛЕНИЕ
                       <h2>{(weather.main.pressure)} hPa</h2>
                   </div>
               </div>


           </div>
        </div>
    );
};

export default Weather;