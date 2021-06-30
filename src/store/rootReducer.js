import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import resumeReducer from "./reducers/resumeReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";

const rootReducer = combineReducers({
  user: userReducer,
  resume: resumeReducer,
  jobAdvertisement: jobAdvertisementReducer
})

export default rootReducer;