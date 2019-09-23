import React, {Component} from 'react'


export class PrintThisComponent extends Component {

  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }

  render() {

    return (
      <div>

        <button  onClick={() => window.print() }>PRINT</button>
       

        

        </div>

    )
  }
}

