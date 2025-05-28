import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/User";

type UserStoreState = {
	users: User[];
	setUser: (user: Omit<User, "id">) => void;
	deleteUser: (id: string) => void;
};

export const useUserStore = create<UserStoreState>()(
	persist(
		(set) => ({
			users: [],
			setUser: (user: Omit<User, "id">) =>
				set((state) => ({
					users: [
						...(state.users || []),
						{
							id: crypto.randomUUID(),
							...user,
						},
					],
				})),
			deleteUser: (id: string) => {
				set((state) => ({
					users: state.users.filter((user: User) => user.id !== id),
				}));
			},
		}),
		{
			name: "employee-storage", // localStorage key
		},
	),
);
