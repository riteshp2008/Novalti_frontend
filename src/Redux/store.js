import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getCountriesReducer, getStatesReducer } from './Reducers/LocationReducers';
import { getUsersReducer, loginReducer, logoutReducer, registerReducer } from './Reducers/UserReducers';

const rootReducer = combineReducers({
    getCountries: getCountriesReducer,
    getStates: getStatesReducer,
    login: loginReducer,
    register: registerReducer,
    logout: logoutReducer,
    getUsers: getUsersReducer,
});

// const initialState = {
//     login: {
//         user: localStorage.getItem('user')
//             ? JSON.parse(localStorage.getItem('user'))
//             : null,
//     },
// };

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
