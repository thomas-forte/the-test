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
      <iframe
        className="mb-2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2L4rX1qxPrk?controls=0&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <Link to="/form2">
        <button type="button">Continue</button>
      </Link>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Test Page" />;

export default TestPage;
