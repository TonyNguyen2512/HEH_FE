import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    token: null,
    email: null,
    username: null,
    role: null,
    image: null,
    exp: 0
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.username = action.payload.name;
            state.role = action.payload.role;
            state.image = action.payload.image;
            state.exp = action.payload.exp;
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.email = '';
            state.username = '';
            state.role = '';
            state.image = '';
            state.userId = '';
            state.exp = 0;
            state.token = '';
            state.vip = false;
        }
    }
});

export const { login, logout } = auth.actions;

export default auth.reducer;
