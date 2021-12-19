import axios from "axios";
export const SET_DID_TRY_AUTOLOGIN = "SET_DID_TRY_AUTOLOGIN";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOG_OUT = "LOG_OUT";

export const setDidTryAutoLogin = () => {
	return (dispatch) => {
		dispatch({ type: SET_DID_TRY_AUTOLOGIN });
	};
};

export const signUp = (email, password, name) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/sign-up", {
				email,
				password,
				name,
			});
			if (!response.data.success) {
				return { message: response.data.message };
			}
			dispatch({
				type: AUTHENTICATE_USER,
				payload: {
					userId: response.data._id,
					name: response.data.name,
					itemsOnSale: response.data.itemsOnSale,
					token: response.data.token,
					itemsBought: response.data.itemsBought,
					email: response.data.email,
				},
			});
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};

export const signIn = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/sign-in", {
				email,
				password,
			});
			if (!response.data.success) {
				return { message: response.data.message };
			}

			dispatch({
				type: AUTHENTICATE_USER,
				payload: {
					userId: response.data._id,
					name: response.data.name,
					itemsOnSale: response.data.itemsOnSale,
					token: response.data.token,
					itemsBought: response.data.itemsBought,
					email: response.data.email,
				},
			});
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};

export const autoLogin = (token) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"/auth/auto-login",
				{},
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			const { success } = response.data;
			if (!success) return { message: response.data.message };
			console.log(response.data);
			dispatch({
				type: AUTHENTICATE_USER,
				payload: {
					userId: response.data._id,
					name: response.data.name,
					itemsOnSale: response.data.itemsOnSale,
					token,
					email: response.data.email,
					itemsBought: response.data.itemsBought,
				},
			});
		} catch (error) {
			throw new Error();
		}
	};
};

export const logOut = () => {
	return async (dispatch) => {
		localStorage.clear();
		dispatch({ type: LOG_OUT });
	};
};
