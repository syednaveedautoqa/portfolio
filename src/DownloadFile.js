import React, {Component} from 'react'
import Resume from './Resume.pdf';


export class DownloadFile extends Component {
state = {}
render() {
return(
<div>
    
    <a href={Resume} download="Resume.pdf">Click to download Resume</a>       
</div>
);
}
}
