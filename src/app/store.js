import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import feedReducer from '../features/dashboard/feedSlice';
import appReducer from './reducers';

const rootReducer = combineReducers({
    users: userReducer,
    feeds: feedReducer,
    app: appReducer
});

const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
 })

export default store;