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

class Rectangle extends Component {
  state = {
    width: null,
    height: null,

  }

  handleUpdate = (e) => {
    const field = e.target.name
    const value = e.target.value

    this.setState({
      [field]: value
    })

  }

  render() {
    const { classes } = this.props
    green('width', this.state.width)
    green('height', this.state.height)
    return (
      <Card title='Area of a Rectangle' formula='h * w'>
        <TextField
          className={classes.textField}
          label='Width'
          name='width'
          onChange={(e) => this.handleUpdate(e)}
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
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
        />
        <Answer>
          Area: {this.state.width * this.state.height}
        </Answer>
      </Card>
    )
  }

}

export default withStyles(styles)(Rectangle)
