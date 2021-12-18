import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Item({ item }) {
	const navigate = useNavigate();
	return (
		<Container>
			<Image src={item.picture} alt="item picture" />
			<div>
				<p>{item.name}</p>
				<p className="price">Rs. {item.price}</p>

				<StyledButton
					onClick={() => navigate(`/item/${item._id}`)}
					variant="contained"
				>
					Buy now
				</StyledButton>
			</div>
		</Container>
	);
}

const Container = styled.div`
	margin: 0;
	margin-right: 1rem;
	border: 1px solid #c4c4c4;
	width: 16rem;
	border-radius: 10px;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	> div {
		> p {
			font-family: "Poppins";
		}
		& .price {
			font-weight: bold;
		}
	}
`;

const Image = styled.img`
	width: 8rem;
`;

const StyledButton = styled(Button)`
	&.css-sghohy-MuiButtonBase-root-MuiButton-root {
		background-color: #638243;
		text-transform: capitalize;
	}
`;
