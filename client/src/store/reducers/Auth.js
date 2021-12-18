import {
	AUTHENTICATE_USER,
	LOG_OUT,
	SET_DID_TRY_AUTOLOGIN,
} from "../actions/Auth";
import { GET_ALL_ITEMS } from "../actions/Item";

const initialState = {
	userId: "",
	name: "",
	email: "",
	itemsOnSale: [],
	itemsBought: [],
	allItems: [],
	isAuth: false,
	token: "",
	setDidTryAutoLogin: false,
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DID_TRY_AUTOLOGIN: {
			return {
				...state,
				setDidTryAutoLogin: true,
			};
		}
		case AUTHENTICATE_USER: {
			return {
				...state,
				userId: action.payload.userId,
				setDidTryAutoLogin: true,
				name: action.payload.name,
				isAuth: true,
				email: action.payload.email,
				itemsBought: action.payload.itemsBought,
				itemsOnSale: action.payload.itemsOnSale,
				token: action.payload.token,
			};
		}
		case GET_ALL_ITEMS: {
			return {
				...state,
				allItems: action.payload,
			};
		}
		case LOG_OUT: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
