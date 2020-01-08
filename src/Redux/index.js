import {combineReducers} from 'redux';
import DemoReducer from '../Redux/genPage'
import AutappReducer from '../Redux/autapp'
import ReqReducer from '../Redux/requestList'
const rootReducer=combineReducers(
    {
        DemoReducer,
        AutappReducer,
        ReqReducer
    }
)
export default rootReducer;