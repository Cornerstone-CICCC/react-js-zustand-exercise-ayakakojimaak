import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/User";

type UserState = {
	users: User[];
};

const initialState: UserState = {
	users: [],
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Omit<User, "id">>) => {
			const newUser: User = {
				id: crypto.randomUUID(),
				...action.payload,
			};
			state.users.push(newUser);
		},
		deleteUser: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
	},
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
