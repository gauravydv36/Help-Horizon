import { combineReducers } from "redux";
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import leaderboard from './leaderboard';
import otherprofile from "./otherprofile";
export default combineReducers({
    alert,
    auth,
    profile,
    post,
    otherprofile,
    leaderboard
})