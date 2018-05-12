import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Card from 'elements/Card'
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

class Triangle extends Component {
  state = {
    base: null,
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
    green('base', this.state.base)
    green('height', this.state.height)
    return (
      <Card title='Area of a Triangle' formula='base * height'>
        <TextField
          className={classes.textField}
          label='Base'
          name='base'
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
          Area: {this.state.base * this.state.height / 2}
        </Answer>
      </Card>
    )
  }

}

export default withStyles(styles)(Triangle)
