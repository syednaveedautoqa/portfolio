import React, {Component} from 'react';
import { Container,Row,Col,ModalHeader } from 'reactstrap';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile_pic.png';
import {PrintThisComponent} from './modal/PrintThisComponent'
import {Table} from './data/table'
import Dialog from './Dialog';
import {Button,ButtonToolbar} from 'react-bootstrap'
import {AddDepModal} from './modal/AddDepModal';
import{Modal,Form, ModalBody, ModalFooter } from 'react-bootstrap';




class App extends Component{

 
 
  //constructor(){
  // super();
   constructor(props) {
   super(props);
   this.state = {deps:[], addModalShow :false};
    this.state = {displayBio: false};
    console.log('Component this', this);
    //this.readMore = () => {
      //this.setState({displayBio: true});// instead of doing this we can bind the function
     // this.readMore = this.readMore.bind(this);
      //this.showLess = this.showLess.bind(this);
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    //}
  }
  //readMore(){
  //  this.setState({displayBio: true});
  // console.log('readMore this', this);
  //}

  //showLess(){
  //  this.setState({displayBio: false});
  // console.log('readMore this', this);
  //}
//This will set the reverse state what ever is currently there
  toggleDisplayBio(){
    this.setState({displayBio: !this.state.displayBio});
  }

 
  render(){
   
   const{deps} = this.state;
   let addModalClose =() => this.setState({addModalShow :false});
    
    return(
<div class="portfolio">
        <img src={profile} alt='profile'align='left' hspace="20" className='profile' />
        <SocialProfiles/> <br/><br/><br/>
            <ButtonToolbar>
            <Button align='left' variant="primary" onClick={() => this.setState({addModalShow: true})}>
               Resume
            
                 </Button>
                 <AddDepModal
        show={this.state.addModalShow}
        onHide={addModalClose}/>           
              </ButtonToolbar> <br/>

              <h2 align='left'><b><font color="Purple">About Me</font></b></h2>
              <p align='left'>
              <b><font color="blue">Name:</font></b> <font color="black">Syed Yaqoob Naveed</font><br/>
              <b><font color="blue">Profession:</font></b><font color="black">Lead QA/Automation Engineer/Scrum Master</font><br/>
              <b><font color="blue">Current Location:</font></b> <font color="black">Los Angeles</font><br/>
  <b><font color="blue">Highest Education:</font></b><font color="black"> Masters in Software Engineering</font><br/>
  <b><font color="blue">Experience:</font></b> <font color="black">10 Plus Years</font><br/>
              </p>
             
          
       

<br></br>
       <h2 align='left'><b><font color="Purple">What i am good at:</font></b></h2>
       <p align='left'><font color="black">
        I have over 10 years of Experience in IT  with over 8 years of US experience</font></p>
     {this.state.displayBio ? ( <div>
       <p align='left'><font color="black">
Worked as QA Lead for Entire Release and co-ordinated with various teams <br/>
Creating Plan, getting Status to make sure smooth delivery of the product in timely manner<br/>
Responsible to collate, consolidate and report program status on daily/weekly basis.<br/>
Overall accountable for test initiation, test requirement identification, test resource allocation, test planning 
test designing, test execution, test closure, test advocacy, issue resolution, team coordination, stakeholder<br/>
conflict, time, cost and quality management<br/>
Develop API Automation Test suites using Ready API, Created Jenkins Jobs , Executed on daily basis<br/>
Develop Data Driven Automation Scripts for Pay roll Applications in C# using Visual Studio & Microsoft Test Manager<br/>
Involve in Agile methodology to deliver best quality of the product by Automation Requirements<br/>
</font></p>
      <button onClick={this.toggleDisplayBio}>Show less</button>
    </div>) :(
      
        <div>
          <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
    )}
<hr/>
    <Table/>
    <hr/>

    <hr/>
    <Projects/>
    <hr/>

    <hr/>
    <PrintThisComponent/>
    <hr/>
    </div>
    )
  }
}
export default App;
