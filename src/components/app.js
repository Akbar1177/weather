import React, {useState} from 'react';
import Form from "./form";
import Weather from "./weather";
import './app.css'
import er from './tenor.gif'
import sol from './solnce.gif'

const App = () => {
    const [weather, setWeather] = useState({err:false});
    const [city, setCity] = useState('');
    return (
       <div className='all'>
           <div className='block'>
               <Form setCity={setCity} setWeather={setWeather} city={city}/>
               {weather.err?<div><img className='error' src={er} alt=""/></div>:Object.keys(weather).length !== 1 ?<Weather weather={weather}/> :<img className='solnce'
                   src={sol} alt=""/>}
           </div>
       </div>

    );
};

export default App;