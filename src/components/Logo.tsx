import React from "react";

import { logos } from "../data/images.yml";

interface ILogoProps {
    size?: string;
}

const Logo: React.FunctionComponent<ILogoProps> = (props = {}) => (
    <img
        src={ logos.prism }
        height={ props.size || 50 }
    />
);

export default Logo;
