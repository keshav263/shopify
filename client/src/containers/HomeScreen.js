import React, { useEffect } from "react";
import styled from "styled-components";
import CoverPic from "../assets/cover.png";
import { Button } from "@mui/material";
import Header from "../components/Header";
import { FaLeaf, FaSyringe } from "react-icons/fa";
import { GiLeafSwirl } from "react-icons/gi";
import * as itemActions from "../store/actions/Item";
import { useDispatch, useSelector } from "react-redux";
export default function HomeScreen() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.Auth);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		await dispatch(itemActions.getAllItems(auth.token));
	}, [dispatch, auth.token]);
	return (
		<Container>
			<Header />
			<Row>
				<Col>
					<CoverPicture src={CoverPic} />
				</Col>
				<Col style={{ width: "35%" }}>
					<Title>Muse + Metta</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
					</Description>
					<StyledButton variant="contained">Buy now</StyledButton>
					<Row
						style={{
							justifyContent: "space-between",
							position: "relative",
							width: "100%",
							transform: "translateY(140%)",
						}}
					>
						<Col>
							<SubTitle>Ingredients</SubTitle>
							<Text>100% Organic</Text>
						</Col>
						<Col>
							<SubTitle>Flavors</SubTitle>
							<Text>4 variations</Text>
						</Col>
						<Col>
							<SubTitle>Volume</SubTitle>
							<Text>475 ml</Text>
						</Col>
					</Row>
				</Col>
			</Row>
			<Section>
				<h4>About</h4>
				<p>
					6000+ buyers across <br /> the world
				</p>
				<div>
					<section>
						<Count>
							2,500 <span>+</span>
						</Count>
						<GreyText>Customers</GreyText>
					</section>
					<section>
						<Count>
							5,000 <span>+</span>
						</Count>
						<GreyText>Monthly Blog Readers</GreyText>
					</section>
					<section>
						<Count>
							17M <span>+</span>
						</Count>
						<GreyText>Social Followers</GreyText>
					</section>
				</div>
			</Section>
			<WhyContainer>
				<h4>Why Muse + Metta</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				</p>
				<div>
					<section>
						<FaLeaf fontSize={40} />
						<p>Natural</p>
					</section>
					<section>
						<FaSyringe fontSize={40} />
						<p>No Side-effect</p>
					</section>
					<section>
						<GiLeafSwirl fontSize={40} />
						<p>100% organic</p>
					</section>
				</div>
			</WhyContainer>
			<Footer>
				<p>Coming Soon!</p>
			</Footer>
		</Container>
	);
}

const Footer = styled.div`
	background-color: #f9f2e2;
	height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	> p {
		text-align: center;
		margin: 0;
		font-family: "Playfair Display", serif;
		font-size: 2rem;
	}
`;

const WhyContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fafafa;
	margin-top: 5rem;
	padding: 4rem 0;
	> h4 {
		text-transform: uppercase;
		color: #638243;
		font-size: 2rem;

		font-family: "Playfair Display", serif;
		letter-spacing: 0.1rem;
		margin-bottom: 0;
	}
	> p {
		margin-top: 1rem;
		width: 60%;
		font-family: "Poppins";

		text-transform: capitalize;
		text-align: center;
	}
	> div {
		display: flex;
		justify-content: space-between;
		width: 60vw;
		margin-top: 3rem;

		> section {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 1rem;
			> p {
				color: #000;
			}
		}
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h4 {
		text-transform: uppercase;
		color: #638243;
		letter-spacing: 0.1rem;
		margin-bottom: 0;
	}
	> p {
		margin-top: 0;
		font-family: "Playfair Display", serif;
		text-transform: capitalize;
		font-size: 3rem;
		text-align: center;
	}
	> div {
		display: flex;
		justify-content: space-between;
		width: 80vw;

		> section {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 1rem;
		}
	}
`;

const GreyText = styled.p`
	margin: 0;
	color: #a0a1a5;
	font-size: 0.9rem;
	font-family: "Poppins", sans-serif;
`;
const Count = styled.p`
	font-size: 3rem;
	margin: 0;
	font-family: "Poppins", sans-serif;
	> span {
		color: #638243;
	}
`;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to bottom, #f8ebd5 80%, #f9f2e2 20%);
`;

const CoverPicture = styled.img`
	height: 100vh;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;
const Col = styled.div``;

const Title = styled.h1`
	color: #638243;
	font-size: 4rem;
	font-family: "Playfair Display", serif;
`;

const Description = styled.p`
	line-height: 1.5;
`;

const StyledButton = styled(Button)`
	width: 8rem;
	&.css-sghohy-MuiButtonBase-root-MuiButton-root {
		border-radius: 0.4rem;
		background-color: #638243;
		text-transform: capitalize;
	}
`;

const SubTitle = styled.h5`
	font-family: "Playfair Display", serif;
	color: #000;
	margin-bottom: 0;
`;

const Text = styled.p`
	color: #638243;
	font-size: 1.4rem;
	margin-top: 10px;
`;
