import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
    users: userReducer,
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