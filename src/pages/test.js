import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./test.module.css";

const TestPage = () => (
  <Layout>
    <div className={styles.center}>
      <h1>
        We already told you, this is{" "}
        <b>
          <i>"not"</i>
        </b>{" "}
        a test.
      </h1>
      <FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon} />
      <Link to="/">
        <button type="button">Back to the test</button>
      </Link>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Test Page" />;

export default TestPage;
