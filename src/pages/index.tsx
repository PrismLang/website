import React from "react";

import Layout from "../layouts/default";
import { COLORS } from "../utils/constants";

import binaries from "../data/binaries.yml";

class IndexPage extends React.PureComponent {
    state = {};

    render = () => (
        <Layout>
            <div css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 72px)",
                backgroundColor: COLORS.BLACK,
                color: COLORS.WHITE,
                textAlign: "center",
            }}>
                <img src="https://github.com/PrismLang.png" height="200" />
                <div css={{
                    padding: 25,
                    fontSize: "2em",
                }}>
                    PRISM
                </div>
                <div css={{
                    maxWidth: 500,
                    padding: 25,
                }}>
                    Prism is dirty, ugly language held together by duct tape, cracked asbestos-filled
                    spackle and sadness. It is a language that was born in the wild and raised in the
                    darkness by a schizophrenic monkey. But it has got <code>character</code>; and in
                    this world, that's enough.
                </div>
            </div>

            <div css={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 1000,
                padding: 25,
                minHeight: "50vh",
            }}>
                <h2>Downloads</h2>
                <p>
                    Prism is currently in prototype. It will soon be released and made open-source.
                    But if you're someone who lives on the edge and is very curious to try it out,
                    you can download the prototype version for your platform and start using it.
                </p>
                <p>
                    These binaries are updated on a regular basis. Keep track of the release date
                    to stay on the latest version of Prism and get access to all latest features.
                </p>
                <div css={{
                    marginTop: 25,
                    marginBottom: 25,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {
                        binaries.map((binary: any, i: number) => (
                            <a href={ binary.link } css={{
                                margin: 10,
                            }}>
                                <button>
                                    { binary.os } { binary.arch }
                                </button>
                            </a>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
