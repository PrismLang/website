import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/default";
import Logo from "../components/Logo";
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
                    <Logo size="200" />
                    <span css={{ marginLeft: -30, }}>4</span>
                </div>
                <p>The page you're looking for doesn't exist... The sadness.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
