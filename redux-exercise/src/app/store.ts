import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "user-storage",
	storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
	reducer: {
		user: persistedUserReducer,
	},
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
