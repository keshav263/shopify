import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/Auth";
import { useNavigate } from "react-router-dom";
export default function InitialScreen(props) {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.Auth);
	const navigate = useNavigate();
	const checkAutoLogIn = useCallback(async () => {
		try {
			if (auth.token) {
				const response = await dispatch(authActions.autoLogin(auth.token));
				if (response) {
					navigate("/authenticate");
				} else {
					navigate("/home");
				}
			} else return navigate("/authenticate");
		} catch (error) {
			navigate("/authenticate");
		}
	}, [navigate, dispatch, auth.token]);

	useEffect(() => {
		checkAutoLogIn();
	}, [checkAutoLogIn]);

	return (
		<Container>
			<CircularProgress />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
`;
