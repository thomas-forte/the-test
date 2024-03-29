import * as React from "react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Woah there eager beaver</h1>
      <p class="text-muted">
        the test you're looking for isn't here. Even if it exists at all...
      </p>
      <FontAwesomeIcon icon={faHand} size="5x" className="mb-3 dark-red" />
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Not Found" />;

export default NotFoundPage;
