import React from "react";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:z.barcoe@gmail.com">
						z.barcoe@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Red. Green. Refactor.</Slogan>
				</CompanyContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
