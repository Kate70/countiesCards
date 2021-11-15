import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Routes, Route} from 'react-router-dom'
//import Main from './components/Main'
import {CountryContext} from './CountryContext';
import ListOfCountries from './components/ListOfCountries/ListOfCountries';
import data from './data';
import Detail from './components/Detail'
import App from './App';


function Routing() {
  const [names, setNames]= useState(data);
  const [country, setCountry]=useState({
    id:null,
    name:'',
    url:'',
    checked:false
  })
 
    return (
     
      <Router>
        <CountryContext.Provider value={{names, setNames, country, setCountry}}>
      <Switch>
          
      <Route exact path = '/' component = {App}/>
       
      <Route exact path = '/countries' component = {ListOfCountries}/>
      <Route  path = '/countries/:name' component = {Detail}/>
        </Switch>
        </CountryContext.Provider>
     </Router>
  );
}

export default Routing;
