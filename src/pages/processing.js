import React, { useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./loading.module.css";

const ProcessingPage = () => {
  const [state, setState] = useState({
    progressAmount: 0,
    currentProgress: 0,
    pStep: 0.5,
    label: "Processing...",
    color: "bg-primary",
  });

  const randomvalue = Math.random() * 100;

  function test2() {
    // My main confusion is mixing setInterval and setTimeout to control state. It seems unpredictable.
    // Some stackoverflows showed using a callback, either set inside the render function or some had it as a global. My guess is its mixing native and react js.
    // A simple example of this is if you remove the last if case things get weird but why does the interval speed up??

    // Welp I just rebuilt and tested it but am struggling reproducing it.

    // I suppose am I doing anything that's a major redflag here? I have seen the interval change, and some flickering with the words, numbers, and progress value.
    // There is also a timeout on the hdglassesad.js file that sometimes acts funny (the button appears like it should but then disappears?) but of course I can't force the error right now.
    const interval = setInterval(() => {
      if (state.progressAmount === 0) {
        setState({
          ...state,
          progressAmount: 9,
        });
      } else if (state.progressAmount === 2) {
        setState({
          ...state,
          progressAmount: 99,
          label: "Oops, Hang On...",
          color: "bg-warning",
        });
      } else if (state.progressAmount === 25) {
        setState({
          ...state,
          progressAmount: 36,
        });
      } else if (state.progressAmount === 9) {
        setState({
          ...state,
          progressAmount: 17,
        });
      } else if (state.progressAmount === 17) {
        setState({
          ...state,
          progressAmount: 32,
        });
      } else if (state.progressAmount === 32) {
        setState({
          ...state,
          progressAmount: 38,
        });
      } else if (state.progressAmount === 38) {
        setState({
          ...state,
          progressAmount: 47,
        });
      } else if (state.progressAmount === 47) {
        setState({
          ...state,
          progressAmount: 54,
        });
      } else if (state.progressAmount === 54) {
        setState({
          ...state,
          progressAmount: 62,
        });
      } else if (state.progressAmount === 62) {
        setState({
          ...state,
          progressAmount: 70,
        });
      } else if (state.progressAmount === 70) {
        setState({
          ...state,
          progressAmount: 89,
        });
      } else if (state.progressAmount === 89) {
        setState({
          ...state,
          progressAmount: 91,
        });
      } else if (state.progressAmount === 91) {
        setState({
          ...state,
          progressAmount: 94,
        });
      } else if (state.progressAmount === 94) {
        setState({
          ...state,
          progressAmount: 97,
        });
      } else if (state.progressAmount === 97) {
        setState({
          ...state,
          progressAmount: 2,
          label: "Oops, Hang On...",
          color: "bg-danger",
        });
      } else if (state.progressAmount === 99) {
        setState({
          ...state,
          progressAmount: 99.9,
          label: "Processing...",
          color: "bg-primary",
        });
      } else if (state.progressAmount > 99 && state.progressAmount < 99.99) {
        setState({
          ...state,
          progressAmount: 99.99,
        });
      } else if (
        state.progressAmount > 99.98 &&
        state.progressAmount < 99.999
      ) {
        setState({
          ...state,
          progressAmount: 99.999,
        });
        // remove this case
      } /*else if (state.progressAmount === 99.999) {
        if (randomvalue > 20) {
          window.location.href = "/submissionerror";
        }
      }*/
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

export default ProcessingPage;
