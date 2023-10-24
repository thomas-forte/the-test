import React, { useState, useEffect, useCallback } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ProcessingResultsPage = () => {
  const [progressAmount, setProgressAmount] = useState(0);
  const [progressClass, setProgressClass] = useState("bg-primary");
  const [progressLabel, setProgressLabel] = useState("Processing...");

  const step = useCallback(() => {
    const randomvalue = Math.random() * 100;

    if (progressAmount === 0) {
      setProgressAmount(9);
    } else if (progressAmount === 2) {
      setProgressAmount(99);
      setProgressLabel("Oops, Hang On...");
      setProgressClass("bg-warning");
    } else if (progressAmount === 25) {
      setProgressAmount(36);
    } else if (progressAmount === 9) {
      setProgressAmount(17);
    } else if (progressAmount === 17) {
      setProgressAmount(32);
    } else if (progressAmount === 32) {
      setProgressAmount(38);
    } else if (progressAmount === 38) {
      setProgressAmount(47);
    } else if (progressAmount === 47) {
      setProgressAmount(54);
    } else if (progressAmount === 54) {
      setProgressAmount(62);
    } else if (progressAmount === 62) {
      setProgressAmount(70);
    } else if (progressAmount === 70) {
      setProgressAmount(89);
    } else if (progressAmount === 89) {
      setProgressAmount(91);
    } else if (progressAmount === 91) {
      setProgressAmount(94);
    } else if (progressAmount === 94) {
      setProgressAmount(97);
    } else if (progressAmount === 97) {
      setProgressAmount(2);
      setProgressLabel("Hmmmmmmmm...");
      setProgressClass("bg-danger");
    } else if (progressAmount === 99) {
      setProgressAmount(99.9);
      setProgressLabel("Processing...");
      setProgressClass("bg-primary");
    } else if (progressAmount > 99 && progressAmount < 99.99) {
      setProgressAmount(99.99);
    } else if (progressAmount > 99.98 && progressAmount < 99.999) {
      setProgressAmount(99.999);
    } else if (progressAmount === 99.999) {
      if (randomvalue > 20) {
        navigate("/submission-error");
      } else {
        navigate("/");
      }
    }
  }, [progressAmount]);

  useEffect(() => {
    const interval = setInterval(() => step(), 5000);

    return () => {
      clearInterval(interval);
    };
  }, [step]);

  return (
    <Layout>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div
          className="progress"
          style={{
            width: "650px",
            maxWidth: "95%",
            height: "32px",
          }}
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={
              progressClass +
              " progress-bar progress-bar-striped progress-bar-animated"
            }
            style={{ width: `${progressAmount}%` }}
          >
            {`${progressAmount}%`}
          </div>
        </div>
        <h4 className="mt-2">{progressLabel}</h4>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Processing..." />;

export default ProcessingResultsPage;
