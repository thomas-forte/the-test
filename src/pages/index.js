import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./index.module.css";

const rand = () => Math.random() * 100 > 90;

const IndexPage = () => (
  <Layout>
    <h1 className={styles.title}>
      This is{" "}
      <strike>
        <i>not</i>
      </strike>{" "}
      a test.
    </h1>
    <hr />
    <p>
      <span className={styles.fancy}>D</span>o not be alarmed, dear friend, for
      this is merely a test. That is to say that we are only testing this and
      not actually doing it. Therefore, there is absolutely no cause for concern
      of any kind. We could just as easily be doing the actual thing now if we
      so wished, for that would be just as easy as conducting a test. But we're
      not. And of course if we were attempting it for real, we would be certain
      to do so properly and not in such an experimental manner. For the real
      thing is serious and should not be taken so lightly, as it may be confused
      with being just a test, and that could be dangerous. But alas, this is not
      real, for it is only a test.
    </p>
    <p>
      You, as a person who may or may not within his or her daily life encounter
      a test (not unlike the aforementioned and currently-ongoing test), may
      hear alternative terms used to reference a test. The use of these
      unfamiliar words may evoke a sense that something is indeed actually going
      to happen soon. However, it would be wise to remember that a test by any
      other name is still a test. A non-exhaustive list of test synonyms
      includes:
    </p>
    <ul>
      <li>Trial</li>
      <li>Trial run</li>
      <li>Drill</li>
      <li>Practice run</li>
      <li>Dry run</li>
      <li>Experiment</li>
      <li>Assessment</li>
      <li>Inspection</li>
      <li>Evaluation</li>
      <li>Check</li>
      <li>Tryout</li>
      <li>Inquest</li>
    </ul>
    <p>
      Should you encounter one of the above-stated expressions, it is
      exceedingly likely that you have, are currently, or are soon to experience
      what most experts would agree qualifies as a test. That is, unless it has
      been specified that said experience is, in fact, <i>not</i> a test. In
      that case, one would be reasonably justified in assuming that it is, as
      stated, not a test. Although, it is also possible that it was specified as
      not being a test in order to deceive those participating in the test into
      believing such, when in reality, it is a test and the testees are being
      tested after all. It is even possible that said test is testing the
      testees on their knowledge of and capacity for distinguishing between
      non-tests and tests. In some extenuating circumstances, it may even be
      possible that the testees are actually testers testing their tester's
      testee-testing tests. But that's uncommon, and again, this is not a test.
    </p>
    <p>...or is it?</p>
    <Link to={!rand() ? "/test" : "/failure"}>
      <button className="me-2" type="button">
        Take the test!
      </button>
    </Link>
    <Link to={!rand() ? "/test" : "/failure"}>
      <button className="me-2" type="button">
        Don't not take the test!
      </button>
    </Link>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
