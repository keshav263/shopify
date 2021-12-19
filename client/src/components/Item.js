import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Item({ item, bought }) {
	const navigate = useNavigate();
	return (
		<Container>
			<div>
				<Image src={item.picture} alt="item picture" />
				<div>
					<p>{item.name}</p>
					<p className="price">Rs. {item.price}</p>

					{!bought && (
						<StyledButton
							onClick={() => navigate(`/item/${item._id}`)}
							variant="contained"
						>
							Buy now
						</StyledButton>
					)}
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	> div {
		margin: 0;
		margin-right: 1rem;
		border: 1px solid #c4c4c4;
		box-sizing: border-box;
		overflow-x: visible;
		white-space: nowrap;
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
		width: 20rem;
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
