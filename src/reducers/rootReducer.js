import { combineReducers } from "redux";
import Tone from '../reducers/ToneReducer'
import Respond from "../reducers/ResponseReducer"

const rootReducer = combineReducers({
Tone,
Respond
});

export default rootReducer
