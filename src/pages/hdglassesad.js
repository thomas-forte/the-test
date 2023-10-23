import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./test.module.css";

const TestPage = () => {
  const [state, setState] = useState({
    canContinue: false,
    // blackout: true,
  });

  // const cantContinueCantBlackout = () =>
  //   setState({ canContinue: false, blackout: false });
  // const canContinueCantBlackout = () =>
  //   setState({ canContinue: true, blackout: false });
  // const canContinueCanBlackout = () =>
  //   setState({ canContinue: false, blackout: true });

  // setTimeout(cantContinueCantBlackout, 4000);
  // setTimeout(canContinueCantBlackout, 30000);
  setTimeout(() => setState({ canContinue: true }), 30000);
  // setTimeout(canContinueCanBlackout, 116000);
  setTimeout(() => (window.location = "/form2"), 125000);

  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3>A quick word from our sponsor:</h3>
        <iframe
          className="mb-2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2L4rX1qxPrk?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div
          className={styles.hoverblock}
          style={state.blackout ? { backgroundColor: "black" } : {}}
        ></div>
        <div className={styles.wait}>
          <p
            className={styles.fadeOut}
            style={{ display: state.canContinue ? "none" : "inline" }}
          >
            Continue after 30 seconds
          </p>
          <Link
            className={styles.fadeIn}
            style={{ display: state.canContinue ? "inline" : "none" }}
            to="/form2"
          >
            <button type="button">Continue</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Sponsor Ad" />;

export default TestPage;
