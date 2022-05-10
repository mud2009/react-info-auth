import React from 'react'
import AddInfo from './AddInfo'
import InfoList from './InfoList'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { withFirestore, isLoaded } from 'react-redux-firebase'
import "firebase/firestore"

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
    const auth = this.props.firebase.auth();
    if (isLoaded(auth) && (auth.currentUser == null)){
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.state.addVisible){
        currentVisibleState = <AddInfo addNewInfo={this.handleClick}/>
        buttonText="Return to feed"
      } else {
        currentVisibleState = <InfoList infoList={this.props.mainInfoList} />
        buttonText="Upload Info"
      }  
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