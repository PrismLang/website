import React from "react";

import { COLORS } from "../utils/constants";

const BackToTop: React.FunctionComponent = () => (
    <div
        css={{
            position: "fixed",
            right: 10,
            bottom: 20,
            cursor: "pointer",
            transition: "opacity .125s ease-out, filter .125s ease-out, transform .125s ease-out",
            opacity: .5,
            ":hover": {
                opacity: 1,
            },
            ":active": {
                filter: "none",
                transform: "scale(.9)",
            },
        }}
        onClick={() => window.scroll({
            top: 0,
            behavior: "smooth"
        })}
    >
        <img src="https://github.com/PrismLang.png" height="50" css={{
            filter: "drop-shadow(0 5px 25px " + COLORS.BORDER_DARK + ")",
        }} />
    </div>
);

export default BackToTop;
