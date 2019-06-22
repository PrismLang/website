import React from "react";
import { Link } from "gatsby";

import Logo from "../Logo";
import { COLORS } from "../../utils/constants";
import isBrowser from "../../utils/isBrowser";

import headerLinks from "../../data/headerLinks.yml";


const HeaderLogo: React.FunctionComponent = () => (
    <div>
        {
            isBrowser() && window.location.pathname === "/"
            ? null
            : <Link to="/" css={{
                display: "flex",
                alignItems: "center",
                color: COLORS.WHITE,
                fontWeight: 400,
                ":hover": {
                    color: COLORS.WHITE,
                },
              }}>
                <Logo size="40" />
                <div css={{
                    marginLeft: 3,
                    textTransform: "uppercase",
                    fontSize: "1.5em",
                }}>P r i s m</div>
              </Link>
        }
    </div>
);

interface IHeaderLink {
    to: string;
    title: string;
}
const HeaderLink: React.FunctionComponent<IHeaderLink> = (props) => (
    <Link to={ props.to } title={ props.title } css={{
        padding: 10,
        color: COLORS.LIGHT_GREY,
        ":hover": {
            color: COLORS.TONE1,
        },
    }}>
        { props.title }
    </Link>
);

interface IHeaderLinks {
    links: IHeaderLink[];
}
const HeaderLinks: React.FunctionComponent<IHeaderLinks> = (props) => (
    <nav css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
    }}>
        {
            props.links.map((link: IHeaderLink, i: number) =>
                <HeaderLink to={ link.to } title={ link.title } />
            )
        }
    </nav>
);

const Header: React.FunctionComponent = () => (
    <header css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
        backgroundColor: COLORS.BLACK,
    }}>
        <HeaderLogo />
        <HeaderLinks links={ headerLinks } />
    </header>
);

export default Header;
