import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "../components/Item";

export default function ProfileScreen() {
	const auth = useSelector((state) => state.Auth);
	const itemsOnSale = auth.allItems.filter(
		(item) => item.seller === auth.userId
	);
	const itemsBought = auth.allItems.filter(
		(item) => item.buyer === auth.userId
	);
	return (
		<Container>
			<Title>{auth.name}</Title>
			<SubTitle>{auth.email}</SubTitle>
			{itemsBought.length > 0 && <Title>Items Bought</Title>}
			<List>
				{itemsBought.map((item) => {
					return <Item key={item.userId} item={item} />;
				})}
			</List>
			{itemsOnSale.length > 0 && <Title>Items On Sale (or Sold)</Title>}
			<List>
				{itemsOnSale.map((item) => {
					return <Item key={item.userId} item={item} />;
				})}
			</List>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
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
