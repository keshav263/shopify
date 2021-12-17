import axios from "axios";
export const SET_DID_TRY_AUTOLOGIN = "SET_DID_TRY_AUTOLOGIN";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOG_OUT = "LOG_OUT";

export const setDidTryAutoLogin = () => {
	return (dispatch) => {
		dispatch({ type: SET_DID_TRY_AUTOLOGIN });
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
			dispatch({
				type: AUTHENTICATE_USER,
				payload: {
					userId: response.data._id,
					firstName: response.data.name,
					lastName: response.data.itemsOnSale,
					token,
					username: response.data.itemsBought,
					provider: response.data.email,
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
	};
};
