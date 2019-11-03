import React from "react";

import isBrowser from "../utils/isBrowser";

import arrow from "../data/arrow.png";

const BackToTop: React.FunctionComponent = () => (
    <div
        css={{
            position: "fixed",
            right: 15,
            bottom: 15,
            height: 40,
            width: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            backgroundColor: "black",
            boxShadow: "0 5px 20px -10px rgba(0, 0, 0, .5)",
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
        <img
            src={ arrow }
            height={ 25 }
        />
    </div>
);

export default BackToTop;
