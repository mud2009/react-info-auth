import React from 'react'
import Info from './Info'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function InfoList() {
  useFirestoreConnect([
    { collection: "info" }
  ])

  const info = useSelector(state => state.firestore.ordered.info)

  if (isLoaded(info)){
    return(
      <>
        {info.map(info => {
          return <Info name={info.name}
            what={info.what}
            key={info.timeOpen}
            />
        })}
      </>
    )
  } else {
    return(
      <>
        <div>Loading...</div>
      </>
    )
  }
}

export default InfoList