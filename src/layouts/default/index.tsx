import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import BackToTop from "../../components/BackToTop";
import Helmet from "../../components/Helmet";

import "../base.css";

interface ILayoutProps {
    title?: string;
    description?: string;
}

const DefaultLayout: React.FunctionComponent<ILayoutProps> = (props) => (
    <div>
        <Helmet
            title={ props.title }
            description={ props.description }
        />
        <Header />
        <Main>
            { props.children }
        </Main>
        <Footer />
        <BackToTop />
    </div>
);

export default DefaultLayout;
