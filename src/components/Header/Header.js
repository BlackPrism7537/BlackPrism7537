import Link from "next/link";
import React from "react";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "1rem",
						flexGrow: 1,
					}}
				>
					<DiCssdeck size="3rem" /> <Span>Zachery Barcoe</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/BlackPrism7537">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://twitter.com/Z_Barcoe">
				<AiFillTwitterCircle size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.instagram.com/z.barcoe/">
				<AiFillInstagram size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
