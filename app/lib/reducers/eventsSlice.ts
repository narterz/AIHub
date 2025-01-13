import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Events } from "@/app/types";

const initialState = {
    openLoginModal: false,
    openRegisterModal: false,
    openProfileModal: false,
} as Events;

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        toggleLoginModal: (state) => {
            state.openLoginModal = !state.openLoginModal;
        },
        toggleRegisterModal: (state) => {
            state.openRegisterModal = !state.openRegisterModal;
        },
        toggleProfileModal: (state) => {
            state.openProfileModal = !state.openProfileModal;
        },
    },
})

export const { toggleLoginModal, toggleProfileModal, toggleRegisterModal } = eventsSlice.actions;
export const eventsSelector = (state: RootState): Events => state.events;
export default eventsSlice.reducer;
