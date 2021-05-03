import React from "react";
import axios from "axios";


export default function Weather({city}) {
    function handleResponse(response) {
        alert(`${response.data.main.temp} degrees in ${city}`)
    }
   let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
    return (
       <h2>hello uoghzu nnnnn</h2>
   )
} 