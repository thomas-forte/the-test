import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./failure.module.css";

const FailurePage = () => (
  <Layout>
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon} />
      <h1>Ooops!</h1>
      <p className="mb-0">
        Seems like the problem was bigger than we thought...
      </p>
      <p>Please wait and try again later.</p>
      <small className={styles.smalltext}>
        In the meantime, be sure to visit our friends at HD Glasses&trade;!
      </small>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Error!" />;

export default FailurePage;
