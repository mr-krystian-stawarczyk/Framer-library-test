import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanetOne from "../imgs/planet-earth.svg";
import PlanetTwo from "../imgs/mars.svg";
import PlanetThree from "../imgs/saturn.svg";
import PlanetFour from "../imgs/uranus.svg";
import background from "../imgs/deep_space___wallpaper___1920x1080_by_array1337_da8pitf-pre.jpg";

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${background});
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
	padding: 3rem calc((100vw - 1300px) / 2);

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		display: inherit;

		Image {
			height: 50%;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

const ColumnLeft = styled.div`
	display: flex;
	color: white;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 5rem 2rem;

	h1 {
		margin-bottom: 0.5rem;
		font-size: 2rem;
		z-index: 1000;
		position: relative;
	}

	p {
		margin: 2rem 0;
		font-size: 4rem;
		line-height: 1.1;
		z-index: 1000;
		position: relative;
	}
`;
const Button = styled(motion.button)`
	padding: 1rem 3rem;
	font-size: 1rem;
	border: 2px solid #fff;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	background: transparent;
	color: white;
	z-index: 1000;
	position: relative;
`;

const Image = styled(motion.img)`
	position: fixed;
	display: grid;
	max-width: 250px;
	max-height: 250px;
	min-width: 200px;
	min-height: 200px;
`;

const ColumnRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	position: relative;

	${Image}:nth-child(1) {
		top: 10px;
		right: 30px;
	}

	${Image}:nth-child(2) {
		top: 230px;
		right: 80px;
	}

	${Image}:nth-child(3) {
		top: 420px;
		right: 90px;
	}

	${Image}:nth-child(4) {
		top: 590px;
		right: 60px;
	}
`;

const Hero = () => {
	const fade = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<Section>
			<Container>
				<ColumnLeft>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3 }}
					>
						Welcome in Galaxy
					</motion.h1>
					<motion.p
						variants={fade}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1 }}
					>
						Your journey beggins here...
					</motion.p>
					<Button
						whileHover={{ scale: 1.1, backgroundColor: "#052df34a" }}
						whileTap={{ scale: 0.95 }}
					>
						Get Started
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<Image
						src={PlanetOne}
						alt="earth"
						whileTap={{ scale: 0.9 }}
						drag={true}
						dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
					/>
					<Image
						src={PlanetTwo}
						alt="mars"
						whileTap={{ scale: 0.6 }}
						drag={true}
						dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 2.3 } }}
					/>
					<Image
						src={PlanetThree}
						alt="jupiter"
						whileTap={{ scale: 0.8 }}
						drag={true}
						dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 2.6 } }}
					/>
					<Image
						src={PlanetFour}
						alt="uranus"
						whileTap={{ scale: 0.9 }}
						drag={true}
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
					/>
				</ColumnRight>
			</Container>
		</Section>
	);
};

export default Hero;
