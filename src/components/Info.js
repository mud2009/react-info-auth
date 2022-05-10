import React from 'react'
import PropTypes from "prop-types"

function Info(props) {
  return (
    <div>{props.what} - {props.name}</div>
  )
}

Info.propTypes = {
  what: PropTypes.string,
  name: PropTypes.string,
}

export default Info