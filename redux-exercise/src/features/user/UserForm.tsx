import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import type { User } from "../../types/User";
import "./UserPage.css";

export function UserForm() {
	const dispatch = useDispatch();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const user: Omit<User, "id"> = {
			firstname: formData.get("firstname") as string,
			lastname: formData.get("lastname") as string,
			age: Number(formData.get("age")),
			hobbies: formData.getAll("hobbies") as string[],
		};
		dispatch(setUser(user));
		event.currentTarget.reset();
	};

	return (
		<div className="user-form-container">
			<h2>User Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input name="firstname" placeholder="Firstname" required />
				</div>
				<div className="form-group">
					<input name="lastname" placeholder="Lastname" required />
				</div>
				<div className="form-group">
					<input name="age" type="number" placeholder="Age" required />
				</div>
				<div className="hobbies-container">
					<label htmlFor="hobbies-container">Hobbies:</label>
					<div className="hobbies-grid">
						<div className="hobby-item">
							<input
								type="checkbox"
								id="reading"
								name="hobbies"
								value="Reading"
							/>
							<label htmlFor="reading">Reading</label>
						</div>
						<div className="hobby-item">
							<input
								type="checkbox"
								id="sports"
								name="hobbies"
								value="Sports"
							/>
							<label htmlFor="sports">Sports</label>
						</div>
						<div className="hobby-item">
							<input
								type="checkbox"
								id="cooking"
								name="hobbies"
								value="Cooking"
							/>
							<label htmlFor="cooking">Cooking</label>
						</div>
						<div className="hobby-item">
							<input
								type="checkbox"
								id="gaming"
								name="hobbies"
								value="Gaming"
							/>
							<label htmlFor="gaming">Gaming</label>
						</div>
						<div className="hobby-item">
							<input
								type="checkbox"
								id="traveling"
								name="hobbies"
								value="Traveling"
							/>
							<label htmlFor="traveling">Traveling</label>
						</div>
					</div>
				</div>
				<button type="submit" className="submit-button">
					Add User
				</button>
			</form>
		</div>
	);
}
