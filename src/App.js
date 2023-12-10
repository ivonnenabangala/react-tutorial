import React, { Component } from "react"
import Table from './Table'
class App extends Component{
    render() {
        const characters = [
            {
              name: 'Charlie',
              job: 'nurse'
            },
            {
                name: 'Mac',
                job: 'doctor'
            },
            {
                name: 'Doe',
                job: 'Actress'
            },
            {
                name: 'Dennis',
                job: 'teacher'
            }
        ]
      return( 
        <div className="container">
        <Table charData={characters}/>
      </div>
      )
    }
  }
  export default App