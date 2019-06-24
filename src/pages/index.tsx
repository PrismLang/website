import React from "react";

import Layout from "../layouts/default";
import Logo from "../components/Logo";
import { COLORS } from "../utils/constants";

import installers from "../data/installers.yml";

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
                <Logo size="200" />
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
                    Prism is a language that was born in the wild and raised in the darkness
                    by a schizophrenic monkey. It is held together by duct tape and cracked
                    asbestos-filled spackle. But it has got <code>character</code>; and in
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
                    The binaries are updated on a regular basis. Keep track of the release date and
                    use these installers to update Prism every time a new version comes out to stay
                    on the latest version of Prism and get access to all latest features.
                </p>
                <p>
                    <strong>
                        To install Prism in your computer, run these installers as superuser/Administrator.
                    </strong>
                </p>
                <div css={{
                    marginTop: 25,
                    marginBottom: 25,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {
                        installers.map((installer: any, i: number) => (
                            <a href={ installer.link } css={{
                                margin: 10,
                            }}>
                                <button>
                                    { installer.os }
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
