import React, { useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ProcessingResultsPage = () => {
  const [state, setState] = useState({
    progressAmount: 0,
    currentProgress: 0,
    pStep: 0.5,
    label: "Processing...",
    color: "bg-primary",
  });

  const randomvalue = Math.random() * 100;

  function test2() {
    const interval = setInterval(() => {
      if (state.progressAmount === 0) {
        setState({
          progressAmount: 9,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 2) {
        setState({
          progressAmount: 99,
          label: "Oops, Hang On...",
          color: "bg-warning",
        });
      } else if (state.progressAmount === 25) {
        setState({
          progressAmount: 36,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 9) {
        setState({
          progressAmount: 17,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 17) {
        setState({
          progressAmount: 32,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 32) {
        setState({
          progressAmount: 38,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 38) {
        setState({
          progressAmount: 47,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 47) {
        setState({
          progressAmount: 54,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 54) {
        setState({
          progressAmount: 62,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 62) {
        setState({
          progressAmount: 70,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 70) {
        setState({
          progressAmount: 89,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 89) {
        setState({
          progressAmount: 91,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 91) {
        setState({
          progressAmount: 94,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 94) {
        setState({
          progressAmount: 97,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 97) {
        setState({
          progressAmount: 2,
          label: "Oops, Hang On...",
          color: "bg-danger",
        });
      } else if (state.progressAmount === 99) {
        setState({
          progressAmount: 99.9,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount > 99 && state.progressAmount < 99.99) {
        setState({
          progressAmount: 99.99,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (
        state.progressAmount > 99.98 &&
        state.progressAmount < 99.999
      ) {
        setState({
          progressAmount: 99.999,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 99.999) {
        if (randomvalue > 20) {
          window.location.href = "/submission-error";
        }
      }
    }, 5000);
  }
  test2();

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
              state.color +
              " progress-bar progress-bar-striped progress-bar-animated"
            }
            style={{ width: `${state.progressAmount}%` }}
          >
            {`${state.progressAmount}%`}
          </div>
        </div>
        <h4 className="mt-2">{state.label}</h4>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Processing..." />;

export default ProcessingResultsPage;
