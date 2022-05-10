import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'


function AddInfo(props) {
  const firestore = useFirestore();

  function addInfoToFirestore(event){
    event.preventDefault();
    props.addNewInfo()

    return firestore.collection('info').add(
      {
        name: event.target.name.value,
        what: event.target.what.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    )
  }

  return (
    <React.Fragment>
      <form onSubmit={addInfoToFirestore}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='what'
          placeholder='What' />
        <button type='submit'>Add Info</button>
      </form>
    </React.Fragment>
  )
}

AddInfo.propTypes = {
  addNewInfo: PropTypes.func
}

export default AddInfo