import React from 'react'
import AddInfo from './AddInfo'
import InfoList from './InfoList'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { withFirestore } from 'react-redux-firebase'

class Control extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      addVisible: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      addVisible: !prevState.addVisible
    }))
  }

  render(){
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.addVisible){
      currentVisibleState = <AddInfo addNewInfo={this.handleClick}/>
      buttonText="Return to feed"
    } else {
      currentVisibleState = <InfoList infoList={this.props.mainInfoList} />
      buttonText="Upload Info"
    }
    return(
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

Control.propTypes = {
  mainInfoList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainInfoList: state
  }
}

Control = connect(mapStateToProps)(Control)

export default withFirestore(Control)