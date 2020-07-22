import { combineReducers } from 'redux';
import unBucketReducer from './unBucketReducer';

// Combine all reducers
const reducers = combineReducers({
  unBucket: unBucketReducer,
});

export default reducers;
