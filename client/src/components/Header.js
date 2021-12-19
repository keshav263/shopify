import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { AiOutlineMenu } from "react-icons/ai";
import { device } from "../device";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	useMediaQuery,
} from "@mui/material";
export default function Header() {
	const navigate = useNavigate();
	const isTablet = useMediaQuery("(max-width:768px)");
	const [open, setOpen] = useState(false);
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const handleDrawerOpen = () => {
		setOpen(true);
	};
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
			<Mid>
				<StyledLink to="/">Home</StyledLink>

				<StyledLink to="/store">Store</StyledLink>
				<StyledLink
					style={{ color: "#638243", transform: "scale(1.5)" }}
					to="/add-item"
				>
					Sell
				</StyledLink>
				<StyledLink to="/">Blog</StyledLink>
				<StyledLink to="/">About Us</StyledLink>
			</Mid>
			<div>
				{!isTablet && (
					<PersonOutlineIcon
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/profile")}
					/>
				)}
				{isTablet && (
					<StyledAiOutlineMenu
						style={{ cursor: "pointer" }}
						onClick={() => handleDrawerOpen()}
					/>
				)}
				<StyledSwipeableDrawer
					anchor="right"
					open={open}
					onClose={handleDrawerClose}
					onOpen={handleDrawerOpen}
				>
					<List>
						<ListItem button key="store">
							<ListItemText
								primary="Store"
								onClick={() => navigate("/store")}
							/>
						</ListItem>
						<ListItem button key="sell">
							<ListItemText
								onClick={() => navigate("/add-item")}
								primary="Sell"
							/>
						</ListItem>
						<ListItem button key="blog">
							<ListItemText primary="Blog" />
						</ListItem>
						<ListItem button key="about us">
							<ListItemText primary="About us" />
						</ListItem>
						<ListItem button key="profile">
							<ListItemText
								onClick={() => navigate("/profile")}
								primary="Profile"
							/>
						</ListItem>
					</List>
				</StyledSwipeableDrawer>
			</div>
		</Container>
	);
}

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
	& .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
		width: 40%;
		@media ${device.mobileL} {
			width: 50%;
		}
		@media ${device.mobileM} {
			width: 55%;
		}
		@media ${device.mobileS} {
			width: 60%;
		}
	}
`;

const StyledAiOutlineMenu = styled(AiOutlineMenu)`
	font-size: 1.5rem;
`;

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

const Mid = styled.div`
	display: flex;
	width: 30%;
	justify-content: space-between;
	@media ${device.laptop} {
		width: 45%;
	}
	@media ${device.tablet} {
		display: none;
	}
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
