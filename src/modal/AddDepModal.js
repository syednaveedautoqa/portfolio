import React, { Component } from 'react';
import{Modal,Button,Row,Col,Form} from 'react-bootstrap';
import {PrintThisComponent} from './PrintThisComponent';
import {DownloadFile} from '../DownloadFile';

export class AddDepModal extends Component {
 constructor(props){
     super(props);
 }
  
  
  
  render() {
return(
    <Modal
    {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        <h1 align="right">Resume</h1>
        
         
    
   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <DownloadFile/>
      
         
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
);
    
  }
}

