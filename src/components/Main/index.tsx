import React from "react";

const Main: React.FunctionComponent = ({ children }) => (
    <main css={{
        minHeight: "100vh",
    }}>
        { children }
    </main>
);

export default Main;
