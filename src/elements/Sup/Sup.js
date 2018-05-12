import React from 'react'

const style = {
  fontSize: '0.6em',
}

const Sup = ({ children }) => {
  return <sup style={style}>{children}</sup>
}

export default Sup
