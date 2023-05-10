import React, { useState, useEffect, useCallback } from "react";

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

  const step = useCallback(() => {
    const randomvalue = Math.random() * 100;

    if (state.progressAmount === 0) {
      setState((state) => ({
        ...state,
        progressAmount: 9,
      }));
    } else if (state.progressAmount === 2) {
      setState((state) => ({
        ...state,
        progressAmount: 99,
        label: "Oops, Hang On...",
        color: "bg-warning",
      }));
    } else if (state.progressAmount === 25) {
      setState((state) => ({
        ...state,
        progressAmount: 36,
      }));
    } else if (state.progressAmount === 9) {
      setState((state) => ({
        ...state,
        progressAmount: 17,
      }));
    } else if (state.progressAmount === 17) {
      setState((state) => ({
        ...state,
        progressAmount: 32,
      }));
    } else if (state.progressAmount === 32) {
      setState((state) => ({
        ...state,
        progressAmount: 38,
      }));
    } else if (state.progressAmount === 38) {
      setState((state) => ({
        ...state,
        progressAmount: 47,
      }));
    } else if (state.progressAmount === 47) {
      setState((state) => ({
        ...state,
        progressAmount: 54,
      }));
    } else if (state.progressAmount === 54) {
      setState((state) => ({
        ...state,
        progressAmount: 62,
      }));
    } else if (state.progressAmount === 62) {
      setState((state) => ({
        ...state,
        progressAmount: 70,
      }));
    } else if (state.progressAmount === 70) {
      setState((state) => ({
        ...state,
        progressAmount: 89,
      }));
    } else if (state.progressAmount === 89) {
      setState((state) => ({
        ...state,
        progressAmount: 91,
      }));
    } else if (state.progressAmount === 91) {
      setState((state) => ({
        ...state,
        progressAmount: 94,
      }));
    } else if (state.progressAmount === 94) {
      setState((state) => ({
        ...state,
        progressAmount: 97,
      }));
    } else if (state.progressAmount === 97) {
      setState((state) => ({
        ...state,
        progressAmount: 2,
        label: "Oops, Hang On...",
        color: "bg-danger",
      }));
    } else if (state.progressAmount === 99) {
      setState((state) => ({
        ...state,
        progressAmount: 99.9,
        label: "Processing...",
        color: "bg-primary",
      }));
    } else if (state.progressAmount > 99 && state.progressAmount < 99.99) {
      setState((state) => ({
        ...state,
        progressAmount: 99.99,
      }));
    } else if (state.progressAmount > 99.98 && state.progressAmount < 99.999) {
      setState((state) => ({
        ...state,
        progressAmount: 99.999,
      }));
    } else if (state.progressAmount === 99.999) {
      if (randomvalue > 20) {
        window.location.href = "/submissionerror";
      }
    }
  }, [state.progressAmount]);

  useEffect(() => {
    const interval = setInterval(() => {
      step();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [step]);

  // function test2() {
  // My main confusion is mixing setInterval and setTimeout to control state. It seems unpredictable.
  // Some stackoverflows showed using a callback, either set inside the render function or some had it as a global. My guess is its mixing native and react js.
  // A simple example of this is if you remove the last if case things get weird but why does the interval speed up??
  // Welp I just rebuilt and tested it but am struggling reproducing it.
  // I suppose am I doing anything that's a major redflag here? I have seen the interval change, and some flickering with the words, numbers, and progress value.
  // There is also a timeout on the hdglassesad.js file that sometimes acts funny (the button appears like it should but then disappears?) but of course I can't force the error right now.

  // The problem with setting an interval in a plain function in the component is that test2() gets run on every render,
  // creating a new interval each time, but the old one keeps going, and updating state causes rerenders -> new interval fn created
  // -> exponential amount of intervals setting state. I'm honestly surprised it doesn't get crazier, maybe just with the 5 second
  // timeout it just takes a while and usually you get randomized to the next page before it gets wild?
  // So I would def create your interval in a useEffect, and clearing it on the return is probably not necessary but doesn't hurt.
  // I think there are a bunch of different ways you could do the rest of it -- I broke "step" out into its own function
  // but you could put it in the useEffect. And I changed the setStates to use a function (state) => ({...state, ...updatedstuff})
  // so that the whole "state" object doesn't need to go in the dependency array (bc I don't think it does deep equality on objects??)
  // Also put the randomValue inside that function so that it isn't a dependency that changes.
  // on hdglassesad.js too I think just slap those in a useEffect and you're good!

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
