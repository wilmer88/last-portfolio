import React from 'react';
import "./AboutContainer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
//import me from "./public/images/me.jpg"
const AboutContainer = () => {
  return (
    <div>
       <body>
        <div className="container-fluid">
    <nav className="navbar sticky-top navbar-light bg-light">
      {/* <link className="navbar-brand" href="portfolio.html"/>
        <span className="nameandbackground"><span>See Portfolio</link></span> */}
    </nav>

   
    <div className="offset-md-1 col-md-5 bg-light mt-5"></div>
    <div className="container-fluid">
      <div className="row">
        <div class="offset-md-1 col-md-5 bg-light mt-5">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 class="display-4">Welcome</h1>
              <p class="lead">About me</p>
            </div>
          </div>
          
          <div class="float-left">
           <h6>Hello, My name is Wilmer Rivera. </h6> 
           <brk>
          </brk>
           <p>Right now my residance is in the city Rome, GA
            
            Im taking this new path as a new  web develper to challange my self and abilities.
             Always taking  pride in the work Im assign, being critical of myself of the finished product.
            Aware that hard work almost always has a reward. More than willing to
            to work hard to get  satisfaction that hard work brings
            treating the project as my own.</p>
          

            
          </div>
         
          <img
            src="./public/images/me.png"
            class="profilepic"
            alt="foto of wilmer rivera"
          />

          <p>
            always looking to see thing for what they are.
            
          </p>
          <p>
            How i look at my self is as a workhorse with 
            opend mind for new ideas and close mind on toxic opinions.
           
          </p>
          
            <h5>Contact Me</h5>
          
           
            
          <div class="modal-dialog modal-xl">Cell: 706-331-4752</div>
          <div class="modal-dialog modal-lg">email: wilmerbaby@gmail.com</div>
          <div class="modal-dialog modal-sm">LinkedIn Profile: <a href="https://www.linkedin.com/in/wilmer-rivera-0536291b3">click here</a></div>
          <div class="modal-dialog modal-sm">Git Hub Profile: <a href="https://github.com/wilmer88">click here</a></div>
          <div class="card"/>
                  <link src="../../assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">Day Planner</h5>
                    <p class="card-text">deployed URL: <Link href={"https://wilmer88.github.io/due-date-jquery/"}>click here</Link></p>
                   <p class="card-text">github URL: <Link href={"https://github.com/wilmer88/due-date-jquery"}>click here</Link></p>
                   </div>
                   <link src="assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">Note Taker</h5>
                    <p class="card-text">deployed URL: <Link href={"https://noty-note.herokuapp.com/"}>click here</Link></p>
                   <p class="card-text">github URL: <Link href={"https://github.com/wilmer88/noty-note"}>click here</Link></p>
                   </div>
                   <link src="assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">Readme Generator</h5>
                    <p class="card-text">deployed URL: <Link href={"https://drive.google.com/file/d/1MPDk5yJzGW1qYmHzdwifFII0VJG_EFlK/view"}>click here</Link></p>
                   <p class="card-text">github URL: <Link href={"https://github.com/wilmer88/leer-node-readme"}>click here</Link></p>
                   </div>
                   <link src="assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">budget-pwq</h5>
                    <p class="card-text">deployed URL: <Link href={"https://budget-keepup.herokuapp.com/"}>click here</Link></p>
                   <p class="card-text">github URL: <Link href={"https://github.com/wilmer88/budget-pwq"}>click here</Link></p>
                   </div>
                   <link src="assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">Employee directory</h5>
                    <p class="card-text">deployed URL: <Link href={"https://wilmer88.github.io/directory-react/"}>click here</Link></p>
                   <p class="card-text">github URL: <Link href={"https://github.com/wilmer88/directory-react"}>click here</Link></p>
                   </div>

                  














          </div>
        
      </div>
      
    </div>
    
  </div>
  </body>
    </div>
  );
};

export default AboutContainer;