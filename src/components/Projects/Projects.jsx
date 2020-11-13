import React from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
    
          <>
          <div class="card"/>
                  <img src="assets/images/one.png" class="card-img-top" alt="pic of gt project"/>
                  <div class="card-body">
                    <h5 class="card-title">Work Day Scheduler</h5>
                    <p class="card-text">deployed URL: <Link href={"https://wilmer88.github.io/due-date-jquery/"}>click here</Link></p>
                   <p class="card-text">github URL: <link href={"https://github.com/wilmer88/lastnote"}>click here</link></p>
                  </div>

                

               </>
                  

    )
}

export default Projects;