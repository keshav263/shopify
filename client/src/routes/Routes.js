import React from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import AdditemScreen from "../containers/AdditemScreen";
import AuthPage from "../containers/AuthPage";
import HomeScreen from "../containers/HomeScreen";
import InitialScreen from "../containers/InitialScreen";
import ItemScreen from "../containers/ItemScreen";
import ProfileScreen from "../containers/ProfileScreen";
import StoreScreen from "../containers/StoreScreen";

const Routes = () => {
	const isAuth = useSelector((state) => state.Auth.isAuth);
	return (
		<Router>
			<Switch>
				<Route path="/" exact element={<InitialScreen />} />
				{!isAuth && <Route path="/authenticate" exact element={<AuthPage />} />}
				<Route path="/home" exact element={<HomeScreen />} />
				<Route path="/add-item" exact element={<AdditemScreen />} />
				<Route path="/store" exact element={<StoreScreen />} />
				<Route path="/item/:id" exact element={<ItemScreen />} />
				<Route path="/profile" exact element={<ProfileScreen />} />
			</Switch>
		</Router>
	);
};

export default Routes;
