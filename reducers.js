import { combineReducers } from "redux";

const rootReducer = combineReducers({
    listings: listingsReducer
});

export default rootReducer;