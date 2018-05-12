import React, { Component } from 'react'
import AppBar from 'elements/AppBar'
import Rectangle from './Rectangle'
import Triangle from './Triangle'
import Circle from './Circle'
import Cylinder from './Cylinder'
import { green } from 'logger'
import Card from 'elements/Card'

const contentStyle = {
  margin: '15px',
  display: 'flex',
  flexFlow: 'row wrap',
}
const appStyle = {

}

class App extends Component {

  render() {

    return (
      <div>
        <AppBar>Geometry</AppBar>
        <div style={contentStyle}>
          <Cylinder />
          {/* <Card
            title='Area of a Cyninder'
            formula='Pi * r2 * h'
          /> */}
          <Rectangle />
          <Triangle />
          <Circle />

        </div>
      </div>
    )
  }
}

export default App
