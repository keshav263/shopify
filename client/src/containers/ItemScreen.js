import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@mui/material";
import * as itemActions from "../store/actions/Item";
import { useDispatch } from "react-redux";
export default function ItemScreen() {
	const allItems = useSelector((state) => state.Auth.allItems);
	const token = useSelector((state) => state.Auth.token);
	const [item, setItem] = useState();
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		const item = allItems.find((item) => item._id === id);

		setItem(item);
	}, [item, allItems, id]);

	const handleClick = async () => {
		await dispatch(itemActions.buyItem(token, item._id));
		navigate("/home");
	};

	return (
		<Container>
			<Header />
			<SubContainer>
				<PhotoContainer>
					<Image src={item?.picture} />
				</PhotoContainer>
				<FormContainer>
					<h3>{item?.name}</h3>
					<p>Rs. {item?.price}</p>
					<StyledButton onClick={handleClick} variant="contained">
						Buy Now
					</StyledButton>
				</FormContainer>
			</SubContainer>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to right, #f8ebd5 40%, #f9f2e2 20%);
`;

const StyledButton = styled(Button)`
	&.css-sghohy-MuiButtonBase-root-MuiButton-root {
		background-color: #638243;
		text-transform: capitalize;
		font-size: 1rem;
		margin-top: 20px;
		padding: 0.5rem 4rem;
	}
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const PhotoContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	height: 60vh;
`;

const FormContainer = styled.div`
	width: 60%;
	padding-left: 10%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	> h3 {
		font-size: 3.5rem;
		font-family: "Playfair Display", serif;
		margin: 0;
	}
	> p {
		font-size: 2rem;
		font-family: "Playfair Display", serif;
	}
`;
