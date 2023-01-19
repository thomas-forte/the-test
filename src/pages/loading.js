import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./loading.module.css";

const LoadingPage = () => {
  const [state, setState] = useState({
    progressAmount: 0,
    currentProgress: 0,
    pStep: 0.5,
    label: "Loading...",
    color: "bg-primary",
  });

  function randomMinToValue(progressAmount, setState) {
    if (progressAmount < 99) {
      setTimeout(
        (progressAmount, setState) => {
          const newAmount = progressAmount + Math.random() * 35;
          setState({
            progressAmount: newAmount,
          });
          randomMinToValue(progressAmount, setState);
        },
        Math.random() * 1000 * 20,
        progressAmount,
        setState
      );
    }
  }
  // randomMinToValue(state.progressAmount, setState);

  function test() {
    const interval = setInterval(() => {
      const updated_progress = state.currentProgress + state.pStep;
      let progress = Math.round(
        (Math.atan(updated_progress) / (Math.PI / 2)) * 100
      );
      setState({
        progressAmount: progress,
        currentProgress: updated_progress,
        pStep: 0.5,
      });
      if (progress >= 100) {
        clearInterval(interval);
      } else if (progress >= 70) {
        setState({
          progressAmount: progress,
          currentProgress: updated_progress,
          pStep: 0.1,
        });
      }
    }, 500);
  }
  // test();

  function test2() {
    const interval = setInterval(() => {
      if (state.progressAmount === 0) {
        setState({
          progressAmount: 25,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 2) {
        setState({
          progressAmount: 98,
          label: "Loading...",
          color: "bg-warning",
        });
      } else if (state.progressAmount === 25) {
        setState({
          progressAmount: 36,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 36) {
        setState({
          progressAmount: 42,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 42) {
        setState({
          progressAmount: 66,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 66) {
        setState({
          progressAmount: 74,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 74) {
        setState({
          progressAmount: 81,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 81) {
        setState({
          progressAmount: 88,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 88) {
        setState({
          progressAmount: 97,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 97) {
        setState({
          progressAmount: 2,
          label: "Oops, Hang On...",
          color: "bg-danger",
        });
      } else if (state.progressAmount === 98) {
        setState({
          progressAmount: 99,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount === 99) {
        setState({
          progressAmount: 99.9,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount > 99 && state.progressAmount < 99.99) {
        setState({
          progressAmount: 99.99,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (
        state.progressAmount > 99.98 &&
        state.progressAmount < 99.999
      ) {
        setState({
          progressAmount: 99.99999999,
          label: "Loading...",
          color: "bg-primary",
        });
      } else if (state.progressAmount > 99.9999999) {
        window.location.href = "/failure";
      }
    }, 5000);
  }
  test2();

  return (
    <Layout>
      <div className={styles.center}>
        <div
          className={styles.custom_progress + " progress"}
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

export default LoadingPage;
