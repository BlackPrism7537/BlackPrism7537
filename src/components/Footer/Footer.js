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
					<Slogan>Adapt. Imporove. Overcome.</Slogan>
				</CompanyContainer>
				<SocialIcons href="https://github.com/BlackPrism7537">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://twitter.com/Z_Barcoe">
					<AiFillTwitterCircle size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://www.instagram.com/z.barcoe/">
					<AiFillInstagram size="3rem" />
				</SocialIcons>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
