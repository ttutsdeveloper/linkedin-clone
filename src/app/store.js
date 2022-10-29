import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import feedReducer from '../features/dashboard/feedSlice';

const rootReducer = combineReducers({
    users: userReducer,
    feeds: feedReducer
});

const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActionPaths: ['payload.credential', 'payload.additionalUserInfo', 'payload.user'],
        },
    })
 })

export default store;