import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import BackToTop from "../../components/BackToTop";

import "../base.css";

const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    <Main>
      { children }
    </Main>
    <Footer />
    <BackToTop />
  </div>
);

export default DefaultLayout;
