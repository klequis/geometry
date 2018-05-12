import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Card from 'elements/Card'
import PI from 'elements/PI'
import Sup from 'elements/Sup'
import Answer from 'elements/Answer'
import { green } from 'logger'


const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
})

class Cylinder extends Component {
  state = {
    radius: null,
    height: null,

  }

  handleUpdate = (e) => {
    const field = e.target.name
    const value = e.target.value

    this.setState({
      [field]: value
    })

  }
  roundTo10th = (num) => {
    green('num', num)
    if (num === 0) {
      return 0
    }
    return Math.max( Math.round(num * 10) / 10, 2.8 ).toFixed(2)
  }
  render() {

    const { classes } = this.props

    const area = () => {
      const pi = Math.PI
      const h = this.state.height
      const r = this.state.radius
      const rSq = Math.pow(r, 2)
      const a = pi * rSq * h

      return this.roundTo10th(a)
    }
    const formula = () => {
      return (<span><PI/> r<Sup>2</Sup> h</span>)
    }

    // title='Area of a Cyninder' formula={formula}
    return (
      <Card title='Volume of a Cyninder' formula={formula()}>
        <TextField
          className={classes.textField}
          label='Radius'
          name='radius'
          onChange={(e) => this.handleUpdate(e)}
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          // value={memberEditing.firstName}
        />
        <TextField
          className={classes.textField}
          label='Height'
          name='height'
          onChange={(e) => this.handleUpdate(e)}
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          // value={memberEditing.firstName}
        />
        <Answer>Area = {area()}</Answer>
      </Card>
    )
  }

}

export default withStyles(styles)(Cylinder)
