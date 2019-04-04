import React, { Component } from 'react';
import './App.css';


const PLACES=[
    {name:'New-Yourk',zip:'10001'},
    {name:'Washington',zip:'20001'},
    {name:'Los Angeles',zip:'90023'},
    {name:'Seattle',zip:'98101'}
  ]

  
class Weather extends Component{
render(){
    return(
    <div>
        <h2>My Weather Component works!!! </h2>
    </div>
    );
    
}
}
export default Weather;