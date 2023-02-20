import {configureStore} from '@reduxjs/toolkit'
import masterReducer from './master/index'

export const store = configureStore({
    reducer:{
        master: masterReducer
    }
})