import React from 'react';
import axios from "axios";
import './form.css'
import lupa from './lupa.gif'

const Form = ({setCity, city, setWeather,weather}) => {
    const key = 'ef01b80ca05af4a5e26cb6e7b04ea5f8';
    const inputHandler = (e) => {
        setCity(e.target.value)
    }
    const formHandler = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(({data}) => setWeather({...weather,...data, err:false}))
            .catch((err)=> {
                setWeather({...weather, err:true})
            })
    }
    return (
        <form onSubmit={formHandler}>
            <input className='search' type="text" placeholder='Введите город' onChange={inputHandler}/>
            <button className='button' type='submit'><img className='lupa' src={lupa} alt=""/></button>
        </form>
    );
};

export default Form;