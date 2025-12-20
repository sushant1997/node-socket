import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/user/user.slice.js'

export const store = configureStore({
    reducer: {
        userSlice
    },
    
})