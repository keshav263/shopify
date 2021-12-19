import { TextField, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import * as authActions from "../store/actions/Auth";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
export default function AuthPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState("");

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const onSubmit = async () => {
		try {
			if (isLoggingIn) {
				if (!email || !password) {
					setMessage("Email and password are required");
					handleClick();
					return;
				}
				setIsLoading(true);
				const response = await dispatch(authActions.signIn(email, password));
				setIsLoading(false);
				if (response?.message) {
					setMessage(response.message);
					handleClick();
				} else {
					navigate("/home");
				}
			} else {
				if (!email || !password || !name) {
					setMessage("Enter all the details");
					handleClick();
					return;
				}
				setIsLoading(true);
				const response = await dispatch(
					authActions.signUp(email, password, name)
				);
				setIsLoading(false);
				if (response?.message) {
					setMessage(response.message);
					handleClick();
				} else {
					navigate("/home");
				}
			}
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			setMessage(error.message);
			handleClick();
			alert(error.message);
		}
	};

	if (isLoading) {
		return (
			<Container
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CircularProgress />
			</Container>
		);
	}
	return (
		<Container>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				message={message}
				onClose={handleClose}
			></Snackbar>
			<Left>
				<Logo
					style={{
						fontSize: "1.2rem",
						textTransform: "capitalize",
						fontFamily: "Poppins",
					}}
				>
					Muse + Meta
				</Logo>
				<Title>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Title>
				<SubTitle>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been th
				</SubTitle>
			</Left>
			<Right>
				<h3>{isLoggingIn ? "Log in" : " Get Started"}</h3>
				{!isLoggingIn && (
					<StyledTextField
						value={name}
						onChange={(e) => setName(e.target.value)}
						id="outlined-basic"
						label="Name"
						variant="outlined"
					/>
				)}
				<StyledTextField
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id="outlined-basic"
					label="Email"
					variant="outlined"
				/>
				<StyledTextField
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					id="outlined-basic"
					label="Password"
					type="password"
					variant="outlined"
				/>
				<StyledButton onClick={onSubmit} variant="contained">
					Log in
				</StyledButton>
				{isLoggingIn ? (
					<p>
						Don't have an account?{" "}
						<span onClick={() => setIsLoggingIn(false)}> Sign Up</span>
					</p>
				) : (
					<p>
						Already have an account?
						<span onClick={() => setIsLoggingIn(true)}> Log in</span>
					</p>
				)}
			</Right>
		</Container>
	);
}

const StyledButton = styled(Button)`
	width: 80%;
	&.css-sghohy-MuiButtonBase-root-MuiButton-root {
		text-transform: capitalize;
		background-color: #638243;
		padding: 1rem;
	}
`;
const StyledTextField = styled(TextField)`
	width: 80%;
	& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
		margin: 1.5rem 0;
	}
`;

const Logo = styled.p`
	margin: 0;
	padding: 1.5rem;
`;

const Container = styled.div`
	height: 100vh;
	background: linear-gradient(to right, #f8ebd5 40%, #f9f2e2 20%);
	display: flex;
`;

const Left = styled.div`
	width: 40%;
	height: 100vh;
`;

const Right = styled.div`
	width: 60%;
	background-color: #f5f5f5;
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem;
	> h3 {
		font-family: "Playfair Display", serif;
		font-size: 3rem;
	}
	> p {
		text-align: right;
		width: 80%;
		> span {
			color: #638243;
			cursor: pointer;
		}
	}
`;

const Title = styled.div`
	font-size: 1.7rem;
	text-decoration: underline;
	text-decoration-color: #638243;
	font-weight: bold;
	padding: 1.5rem;
	margin-top: 3rem;
`;

const SubTitle = styled.div`
	font-size: 1rem;
	padding: 1.5rem;
`;
