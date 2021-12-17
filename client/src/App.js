import "./App.css";

import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import AuthReducer from "./store/reducers/Auth";
import Routes from "./routes/Routes";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5001";
function App() {
	const persistConfig = {
		key: "root",
		storage: storage,
	};

	const rootReducer = combineReducers({
		Auth: AuthReducer,
	});

	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
	const persistedStore = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate
				persistor={persistedStore}
				// loading={<CircularProgress color="secondary" />}
			>
				<Routes />
			</PersistGate>
		</Provider>
	);
}

export default App;
