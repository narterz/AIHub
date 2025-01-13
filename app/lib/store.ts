"use client"
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './reducers/authSlice'
import eventsSlice from './reducers/eventsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        events: eventsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch