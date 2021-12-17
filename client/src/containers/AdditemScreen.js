import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import S3 from "react-aws-s3";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../store/actions/Item";
import { AiOutlinePlus } from "react-icons/ai";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function AdditemScreen() {
	const fileRef = useRef();
	const [picture, setPicture] = useState();
	const [price, setPrice] = useState("");
	const [name, setName] = useState("");
	const token = useSelector((state) => state.Auth.token);
	const [category, setCategory] = useState("");
	const dispatch = useDispatch();
	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		console.log(fileUploaded);
		upload(fileUploaded);
	};
	const upload = async (file) => {
		window.Buffer = window.Buffer || require("buffer").Buffer;
		const config = {
			bucketName: "images263",
			dirName: "productPictures",
			region: "us-west-1",
			accessKeyId: "AKIA5VUWPWVJDF6CVCWL",
			secretAccessKey: "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",
		};
		try {
			const S3Client = new S3(config);
			const data = await S3Client.uploadFile(file, "xyz.jpg");
			console.log(data);
			if (data.status === 204) {
				setPicture(data.location);
			} else {
				throw new Error();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async () => {
		await dispatch(itemActions.addItem(token, price, name, picture, category));
	};

	return (
		<Container>
			<input
				type="file"
				ref={fileRef}
				onChange={handleChange}
				style={{ display: "none" }}
			/>
			<Header />
			<SubContainer>
				<PhotoContainer>
					{picture ? (
						<Image src={picture} />
					) : (
						<AiOutlinePlus
							size={80}
							style={{ cursor: "pointer" }}
							onClick={() => fileRef.current.click()}
						></AiOutlinePlus>
					)}
				</PhotoContainer>
				<FormContainer>
					<StyledTextField
						variant="standard"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Add name.."
					/>
					<FormControl
						style={{
							marginBottom: "1rem",
						}}
						onChange={(e) => setCategory(e.target.value)}
						component="fieldset"
					>
						<FormLabel style={{ color: "#638243" }} component="legend">
							Gender
						</FormLabel>
						<StyledRadioGroup
							color="#638243"
							row
							aria-label="gender"
							name="row-radio-buttons-group"
						>
							<FormControlLabel value="Men" control={<Radio />} label="Men" />
							<FormControlLabel
								value="Women"
								control={<Radio />}
								label="Women"
							/>
							<FormControlLabel value="Kids" control={<Radio />} label="Kids" />
						</StyledRadioGroup>
					</FormControl>
					<Price
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Price"
						variant="standard"
						type="number"
					/>
					<StyledButton onClick={onSubmit} variant="contained">
						Put on sale
					</StyledButton>
				</FormContainer>
			</SubContainer>
		</Container>
	);
}

const StyledRadioGroup = styled(RadioGroup)`
	& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
		color: #638243;
	}
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

const Image = styled.img`
	height: 60vh;
`;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to right, #f8ebd5 40%, #f9f2e2 20%);
`;

const FormContainer = styled.div`
	width: 60%;
	padding-left: 10%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;
const Price = styled(TextField)`
	&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		width: 50%;

		margin-bottom: 3rem;
	}
	& .css-1480iag-MuiInputBase-root-MuiInput-root {
		font-size: 2rem;
		font-family: "Playfair Display", serif;
	}
`;

const StyledTextField = styled(TextField)`
	&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		width: 50%;
		margin-bottom: 3rem;
	}
	& .css-1480iag-MuiInputBase-root-MuiInput-root {
		font-size: 3.5rem;
		font-family: "Playfair Display", serif;
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
