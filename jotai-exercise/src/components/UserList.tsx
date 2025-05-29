import { useAtom,useAtomValue } from "jotai";
import { usersAtom,totalUsersAtom } from "../atoms/user.atom";
import type { User } from "../types/User";

export function UserList() {
const [users, setUsers] = useAtom(usersAtom);
const totalUsers = useAtomValue(totalUsersAtom);

const deleteUser = (id: string) => {
	setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
};

	return (
		<div>
			<h2>User List ({totalUsers})</h2>
			{users.length > 0 && (
				<ul>
					{users.map((user: User) => (
						<li key={user.id}>
							<div>firstname: {user.firstname}</div>
							<div>lastname: {user.lastname}</div>
							<div>Age: {user.age}</div>
							<div>Hobbies: {user.hobbies.join(", ")}</div>
							<button type="button" onClick={() => deleteUser(user.id)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
