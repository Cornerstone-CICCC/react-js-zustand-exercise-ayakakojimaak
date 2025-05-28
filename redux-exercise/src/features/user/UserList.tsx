import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { deleteUser } from "./userSlice";
import type { User } from "../../types/User";

export function UserList() {
	const dispatch = useDispatch();
	const users = useSelector((state: RootState) => state.user.users);

	return (
		<div>
			<h2>User List</h2>
			{users.length > 0 && (
				<ul>
					{users.map((user: User) => (
						<li key={user.id}>
							<div>firstname: {user.firstname}</div>
							<div>lastname: {user.lastname}</div>
							<div>Age: {user.age}</div>
							<div>Hobbies: {user.hobbies.join(", ")}</div>
							<button
								type="button"
								onClick={() => dispatch(deleteUser(user.id))}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
