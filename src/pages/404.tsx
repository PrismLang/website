import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/default";
import { COLORS } from "../utils/constants";

class NotFoundPage extends React.PureComponent {
    state = {};

    render = () => (
        <Layout>
            <div css={{
                minHeight: "100vh",
                padding: 25,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.BLACK,
                color: COLORS.WHITE,
                textAlign: "center",
            }}>
                <div css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 25,
                    fontSize: "10em",
                }}>
                    <span css={{ marginRight: -30, }}>4</span>
                    <img src="https://github.com/PrismLang.png" height="200" css={{
                        filter: "drop-shadow(0 15px 150px " + COLORS.BORDER_DARK + ")",
                    }} />
                    <span css={{ marginLeft: -30, }}>4</span>
                </div>
                <p>The page you're looking for doesn't exist... The sadness.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
