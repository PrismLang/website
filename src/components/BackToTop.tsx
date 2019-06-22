import React from "react";

import Logo from "./Logo";
import isBrowser from "../utils/isBrowser";

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
        onClick={() => isBrowser() && window.scroll({
            top: 0,
            behavior: "smooth",
        })}
    >
        <Logo size="50" />
    </div>
);

export default BackToTop;
