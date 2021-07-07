import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import resumeReducer from "./reducers/resumeReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import favoriteJobReducer from "./reducers/favoriteJobReducer";

const rootReducer = combineReducers({
  user: userReducer,
  resume: resumeReducer,
  jobAdvertisement: jobAdvertisementReducer,
  favoriteJob: favoriteJobReducer
})

export default rootReducer;