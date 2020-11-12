// import AboutContainer from "./container/AboutContainer/AboutContainer"
//  import Portfolio from "./container/Portfolio/Portfolio.jsx"
 import React from "react";
 import {BrowserRouter as Router, Rout, Link } from 'react-router-dom';
 import container from 'react-bootsrap/container';
 
 class App extends React.Component{
   constructor(props){
     super(props);
     this.state= {
       title: 'Wilmer Rivera',
       headerLinks: [
         { title: 'about', path: '/'},
         { title: 'portfolio', path: '/portfolio'}
       ],
       home: {
         tiltle: 'Taking steps',
         subTitle: 'projects time',
         text : 'look what I created'
       },
       about: {
         title: 'Learn about me'
       },
       contact: {
         title: 'pick up the phone'
       }

     }
     
   }
   render() {
     return(
<Router>
      <h1>sup</h1>
      </Router>
     );
   }
 }
 export default App;