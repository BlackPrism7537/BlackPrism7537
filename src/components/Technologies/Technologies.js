import React from "react";
import { DiNodejsSmall, DiPython, DiReact } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />

		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies, In both web and software
			developement.
		</SectionText>
		<List>
			<ListItem>
				<DiPython size="3rem" />
				<ListContainer>
					<ListTitle>Languages</ListTitle>
					<ListParagraph>
						JavaScript
						<br />
						Python
						<br />
						PHP
						<br />
						Java
						<br />
						MySQL
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						React.js
						<br />
						Material UI
						<br />
						Angular
						<br />
						Next.js
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiNodejsSmall size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						Node JS
						<br />
						Symfony
						<br />
						Express
						<br />
						MySQL
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
