import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import infoListReducer from "./info-list-reducer"

const rootReducer = combineReducers({
  mainInfoList: infoListReducer,
  firestore: firestoreReducer
})

export default rootReducer