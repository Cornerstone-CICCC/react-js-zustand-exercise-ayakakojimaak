import { useUserStore } from "../stores/user.store";

export function User() {
	const { users, deleteUser } = useUserStore();

	return (
		<div>
			<h2>User List</h2>
			{users.length > 0 && (
				<ul>
					{users.map((user) => (
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
