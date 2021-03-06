import styled from "styled-components";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../store/actions/Item";
import Item from "../components/Item";
export default function StoreScreen() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.Auth);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		await dispatch(itemActions.getAllItems(auth.token));
	}, [dispatch, auth.token]);

	return (
		<Container>
			<Header />
			<Title>Store</Title>
			<SubTitle>Men</SubTitle>
			<List>
				{auth.allItems.map((item) => {
					if (item.category === "Men" && item.sold === false)
						return <Item key={item._id} item={item} />;
					return <div></div>;
				})}
			</List>
			<SubTitle>Women</SubTitle>
			<List>
				{auth.allItems.map((item) => {
					if (item.category === "Women" && item.sold === false)
						return <Item key={item._id} item={item} />;
					return <div></div>;
				})}
			</List>
			<SubTitle>Kids</SubTitle>
			<List>
				{auth.allItems.map((item) => {
					if (item.category === "Kids" && item.sold === false)
						return <Item key={item._id} item={item} />;
					return <div></div>;
				})}
			</List>
		</Container>
	);
}

const List = styled.div`
	display: flex;

	margin-left: 5rem;

	overflow-x: scroll;
	overflow-y: visible;
	flex-direction: row;
	align-items: center;
`;

const Container = styled.div`
	background: linear-gradient(to right, #f8ebd5 40%, #f9f2e2 20%);
	padding-bottom: 5rem;
	height: 100%;
`;

const Title = styled.h1`
	margin: 0;
	padding-top: 5rem;
	padding-left: 5rem;
	font-family: "Playfair Display", serif;
`;

const SubTitle = styled.h3`
	margin: 1rem 5rem;
	font-family: "Poppins", sans-serif;
`;
