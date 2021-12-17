import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";
export default function Header() {
	return (
		<Container>
			<div>
				<StyledLink
					style={{
						fontSize: "1.2rem",
						textTransform: "capitalize",
						fontFamily: "Poppins",
					}}
					to="/"
				>
					Muse + Meta
				</StyledLink>
			</div>
			<div
				style={{
					width: "30%",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<StyledLink to="/">Home</StyledLink>

				<StyledLink to="/">Store</StyledLink>
				<StyledLink
					style={{ color: "#638243", transform: "scale(1.5)" }}
					to="/add-item"
				>
					Sell
				</StyledLink>
				<StyledLink to="/">Blog</StyledLink>
				<StyledLink to="/">About Us</StyledLink>
			</div>
			<div>
				<PersonOutlineIcon />
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	height: 4rem;
	box-sizing: border-box;
	position: absolute;
	width: 100vw;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	color: #000;
	font-weight: 500;
	cursor: pointer;
	font-size: 0.8rem;
	&:hover {
		cursor: pointer;
	}
`;
