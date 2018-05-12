import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import H3 from 'elements/H3'
import H4 from 'elements/H4'
import Body2 from 'elements/Body2'
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

class Circle extends Component {
  state = {
    radius: null,


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
    return (
      <Card title='Area of a Circle' formula={<span><PI/> r<sup>2</sup></span>}>
        <TextField
          className={classes.textField}
          label='Radius'
          name='radius'
          onChange={(e) => this.handleUpdate(e)}
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Answer>

          Area: {this.roundTo10th(Math.pow(this.state.radius, 2) * Math.PI)}
        </Answer>
      </Card>
    )
  }

}

export default withStyles(styles)(Circle)
