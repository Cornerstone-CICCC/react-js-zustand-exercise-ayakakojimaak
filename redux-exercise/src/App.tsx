import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { UserList } from "./features/user/UserList";
import { UserForm } from "./features/user/UserForm";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<UserList />
				<UserForm />
			</PersistGate>
		</Provider>
	);
}

export default App;
