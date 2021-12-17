import React from "react";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import AdditemScreen from "../containers/AdditemScreen";
import AuthPage from "../containers/AuthPage";
import HomeScreen from "../containers/HomeScreen";
import InitialScreen from "../containers/InitialScreen";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact element={<InitialScreen />} />
				<Route path="/home" exact element={<HomeScreen />} />
				<Route path="/authenticate" exact element={<AuthPage />} />
				<Route path="/add-item" exact element={<AdditemScreen />} />
			</Switch>
		</Router>
	);
};

export default Routes;
