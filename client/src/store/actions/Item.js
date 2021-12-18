import axios from "axios";
export const ADD_ITEM = "ADD_ITEM";
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";

export const buyItem = (token, itemId) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"/items/buy-item",
				{ token, itemId },
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};

export const addItem = (token, price, name, picture, category) => {
	return async (dispatch) => {
		try {
			console.log({ price, name, picture, category });
			const response = await axios.post(
				"/items/add-item",
				{ price, name, picture, category },
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			console.log(response.data);
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

export const getAllItems = (token) => {
	return async (dispatch) => {
		try {
			const response = await axios.get("/items/all-items", {
				headers: {
					"x-auth-token": token,
				},
			});
			console.log(response.data);
			dispatch({
				type: GET_ALL_ITEMS,
				payload: response.data.item,
			});
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};
