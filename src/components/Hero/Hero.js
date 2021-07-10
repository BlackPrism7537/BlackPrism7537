import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portofilo
			</SectionTitle>
			<SectionText>
				A Computer Science Student?
				<br />
				An Amateur Web Developer?
				<br />
				A Networking Enthusiast?
				<br />A Fast Learner?
				<br />
				That's Me!
			</SectionText>
			<Button onClick={() => (window.location = "mailto:z.barcoe@gmail.com")}>
				Contact Me
			</Button>
			<Button onClick={() => (window.location = "/ZacheryBarcoeCV.pdf")}>
				Download CV
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
