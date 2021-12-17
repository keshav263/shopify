import axios from "axios";
export const ADD_ITEM = "ADD_ITEM";

export const addItem = (token, price, name, picture, category) => {
	return async (dispatch) => {
		try {
			console.log({ price, name, picture, category });
			// const response = await axios.post(
			// 	"/auth/add-item",
			// 	{ price, name, picture, category },
			// 	{
			// 		headers: {
			// 			"x-auth-token": token,
			// 		},
			// 	}
			// );
			// console.log(response.data);
			// dispatch({
			// 	type: AUTHENTICATE_USER,
			// 	payload: {
			// 		userId: response.data._id,
			// 		firstName: response.data.name,
			// 		lastName: response.data.itemsOnSale,
			// 		token,
			// 		username: response.data.itemsBought,
			// 		provider: response.data.email,
			// 	},
			// });
		} catch (error) {
			console.log(error);
			// throw new Error();
		}
	};
};
