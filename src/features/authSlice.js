import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false
};

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		login: state => {
			state.loggedIn = true;
		},
		logout: state => {
			state.loggedIn = false;
		}
	}
});

const { actions } = authSlice;

export const { login, logout } = actions;

export default authSlice.reducer;
