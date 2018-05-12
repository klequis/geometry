import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import purple from 'material-ui/colors/purple'
import Typography from 'material-ui/Typography'
import blue from 'material-ui/colors/blue'

const styles = {
  card: {
    minWidth: 275,
    margin: '20px',
  },

  formula: {
    marginBottom: '40px',
  },
  title: {
    marginBottom: '20px',
    color: blue[500]
  },
  pos: {
    marginBottom: 12,
  },
}

function CardWrapped({ classes, children, formula, title }) {

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="headline" component="h2">
            { title }
          </Typography>
          <Typography className={classes.formula} variant='title' color="textSecondary">
            { formula }
          </Typography>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

CardWrapped.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardWrapped)
