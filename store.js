import {configureStore} from '@reduxjs/toolkit/config';
import navReducer from './slices/navSlices';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
