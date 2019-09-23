import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import Dialog from '../src/Dialog';

class SocialProfile extends Component {
    state = {
        isOpen: false
     
     }
    render(){
       
        const { link, image} = this.props.socialProfile;
        
        return(
            <div align='right'>
           
            <span class="connect">
          <button onClick={(e) => this.setState({ isOpen: true })}>Email Me at</button>
          <Dialog 
 style={{width: '200px', marginLeft: '40%', backgroundColor: 'transparent'}}
 overlayStyle={{backgroundColor: 'transparent'}}
 title= 'Loading'
 titleStyle={{paddingTop: '0px', paddingLeft: '45px', fontSize: '15px', lineHeight: '40px'}}
 isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}  
 >
 <p align="center">syednaveedautoqa@gmail.com</p> 
 
      
 </Dialog>
                <a href={link}><img  src={image} alt='social-profile' style={{width: 35, height: 35,margin: 15}}/></a>
           
            </span>
            </div>
        )
    }
}
class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h5 align="right">Connect with me!</h5>
             
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;