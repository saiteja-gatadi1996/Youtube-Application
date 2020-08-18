import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    //BEM naming convention
    <div className="app">
  <Router>
 <Header/>
    <Switch>

      <Route path="/search/:searchTerm">
      <div className="app__page">
     <Sidebar/>  
     <SearchPage/> 
     {/* we are giving 0.8 flex */}
    </div>
       
      </Route>

      <Route path="/">
      
     {/* <Header/> */}
     <div className="app__page">
     <Sidebar/>  
     <RecommendedVideos/>
    </div>
      </Route>

    </Switch>
  </Router>



    
    </div>
  );
}

export default App;
