import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {

  answer: {
    marginTop: '30px',
  },

}

const Answer = ({ classes, children }) => {
  return (
    <Typography className={classes.answer} variant='title' color="textSecondary">
      { children }
    </Typography>
  )

}

export default withStyles(styles)(Answer)
