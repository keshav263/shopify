import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Item from "../components/Item";
import * as authActions from "../store/actions/Auth";
import { useNavigate } from "react-router-dom";
export default function ProfileScreen() {
	const auth = useSelector((state) => state.Auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const itemsOnSale = auth.allItems.filter(
		(item) => item.seller === auth.userId
	);
	const itemsBought = auth.allItems.filter(
		(item) => item.buyer === auth.userId
	);
	return (
		<Container>
			<Title>{auth.name} </Title>
			<SubTitle>{auth.email}</SubTitle>
			<p
				onClick={() => {
					dispatch(authActions.logOut());
					navigate("/authenticate");
				}}
			>
				Log out
			</p>
			{itemsBought.length > 0 && <Title>Items Bought</Title>}
			<List>
				{itemsBought.map((item) => {
					return <Item key={item._id} item={item} bought={true} />;
				})}
			</List>
			{itemsOnSale.length > 0 && <Title>Items On Sale (or Sold)</Title>}
			<List>
				{itemsOnSale.map((item) => {
					return <Item key={item._id} item={item} bought={true} />;
				})}
			</List>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
	padding-bottom: 5rem;
	padding-left: 5rem;
	background: linear-gradient(to right, #f8ebd5 40%, #f9f2e2 20%);
`;

const Title = styled.h1`
	margin: 0;
	padding-top: 5rem;
	font-family: "Playfair Display", serif;
`;

const SubTitle = styled.h3`
	font-family: "Playfair Display", serif;
`;

const List = styled.div`
	display: flex;
`;
