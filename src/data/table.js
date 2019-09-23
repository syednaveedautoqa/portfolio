import React, { Component } from 'react'

export class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         skills: [
            { Id:1,Automation: 'Ready API,Selenium, RC and Web Driver, Quality Center, STS, SVN, Test Link, NVDA' ,
            Management: 'Outlook, Word, Excel, PowerPoint, Lotus Notes, SharePoint, RALLY, SPIRA' ,
            Languages:'Java, Groovy, C#,React JS, HTML, XML, CSS SQL' ,
            BuildAndCompile:'Jenkins, Maven' ,
            Databases: 'MySQL, Oracle 9, Mongodb' ,
            BugTracking: 'Rally,Bugzilla, JIRA, TRAC',
            
            Platforms: 'Windows, Macintosh, Linux, IPhone, Android, Touch screen devices' }
         ]
      }
   }



   

renderTableData() {
    return this.state.skills
    .map((skill, index) => {
       const { Id,Automation, Management, Languages, BuildAndCompile,
        Databases,BugTracking,Platforms} = skill //destructuring
       return (
        <tr key={Id}>
        <td>{Id}</td>
        <td>{Automation}</td>
        <td>{Management}</td>
        <td>{Languages}</td>
        <td>{BuildAndCompile}</td>
        <td>{Databases}</td>
        <td>{BugTracking}</td>
        <td>{Platforms}</td>
     </tr>

            
          
       );
    });
 }

 renderTableHeader() {
    let header = Object.keys(this.state.skills[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }


 render() {
    return (
       <div>
          <h1 id='title'><font color="Purple">Tools & Skills</font></h1>
          <table id='skillset'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}
export default Table