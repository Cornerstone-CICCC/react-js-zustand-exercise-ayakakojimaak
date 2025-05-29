import { atom } from "jotai";
import type { User } from "../types/User";

const firstNameAtom = atom<string>("firstname");
const lastNameAtom = atom<string>("lastname");
const ageAtom = atom<number>(0);
const hobbiesAtom = atom<string[]>([]);
const usersAtom = atom<User[]>([]);

// custom hook to get the total number of users
const totalUsersAtom = atom((get) => get(usersAtom).length);

export {
	firstNameAtom,
	lastNameAtom,
	ageAtom,
	hobbiesAtom,
	usersAtom,
	totalUsersAtom,
};