import React, {Component} from 'react';
import PROJECTS from './data/projects';
import Dialog from './Dialog';
import Table from './data/table';


class Project extends Component{
    state = {
        isOpen: false
     
     }
     
    render(){
       // console.log('this.props',this.props);
        const {Client, Designation,Location, Duration,jobDuties} = this.props.project;
        
        // display: 'inline-block'
        return (
            
            <div align='left' style={{width: 500, margin: 15}}>  
     
          <h4><b><font color="blue"> {Client}</font></b> </h4>  
         {/* <img src={image} alt='projectname'   style={{ width:200, height: 120}}/>   */}
          <p ><font color="black">{Designation}</font></p> 
         
          <p><font color="black">{Location}</font></p>  
          <p><font color="black">{Duration}</font></p> 
          {/* <a href ={Duration}>{Duration}</a>  */}

          <div className="App">

      
     
  
 
    </div>
 

          
          </div> 
        )
    }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2 align='left'><b><font color="Purple">Work Experience</font></b></h2>
                <h3 align='left'><b><font color="Purple">Current And Previous Projects</font></b></h3>
                
<div>
    {
        PROJECTS.map(PROJECT => {
            return(
                <Project key={PROJECT} project={PROJECT} />
            );
        })
    }
     
</div>

            </div>
        )
    }
}

export default Projects;