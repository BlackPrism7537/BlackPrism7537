import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portofilo
			</SectionTitle>
			<SectionText>
				A Complete and Expansive look at what I can do for you
			</SectionText>
			<Button onClick={() => (window.location = "mailto:z.barcoe@gmail.com")}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
