import React from "react";

import { COLORS } from "../../utils/constants";

const FooterLinks: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        justifyContent: "space-between",
        color: COLORS.GREY,
        backgroundColor: COLORS.DARK,
        fontSize: ".8em",
    }}>
        <div>
            Prism Programming Language
        </div>
    </div>
);

const MetaFooter: React.FunctionComponent = () => (
    <div css={{
        padding: "2rem 8rem",
        display: "flex",
        justifyContent: "space-between",
        color: COLORS.GREY,
        fontSize: ".8em",
    }}>
        <div>
            Coded with ❤ &amp; ☕ by <a href="https://traction.one" target="__blank">Traction</a>
        </div>
        <div>
            &copy; Sankarsan Kampa
        </div>
    </div>
);

const Footer: React.FunctionComponent = () => (
    <footer css={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
    }}>
        <FooterLinks />
        <MetaFooter />
    </footer>
);

export default Footer;
