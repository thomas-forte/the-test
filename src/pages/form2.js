import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./form.module.css";

const FormPage = () => (
  <Layout>
    <div className="alert alert-secondary mb-0 mt-5" role="alert">
      QUESTIONS
    </div>

    <hr className="mb-2" />

    <form action="../processing" className="mb-5">
      <div className="mb-5">
        <label>1.) Can you verify that you're not a robot?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotVerification"
            id="robotVerification1"
            required
          />
          <label class="form-check-label" for="robotVerification1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotVerification"
            id="robotVerification2"
            required
          />
          <label class="form-check-label" for="robotVerification2">
            No
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label>
          2.) Do you think robots have secretly infiltrated society, kidnapped
          people you know and replaced them with identical clones?
        </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotInfiltration"
            id="robotInfiltration1"
            required
          />
          <label class="form-check-label" for="robotInfiltration1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotInfiltration"
            id="robotInfiltration2"
            required
          />
          <label class="form-check-label" for="robotInfiltration2">
            No
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="planet">3.) Which planet do you reside on?</label>
        <select className="form-control" name="planet" required>
          <option value="">-</option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
        </select>
      </div>

      <div className="mb-2">
        <label>4.) What is the airspeed velocity of an unladen swallow?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="swallow"
            id="swallow1"
            required
          />
          <label class="form-check-label" for="swallow1">
            325 kph.
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="swallow"
            id="swallow2"
            required
          />
          <label class="form-check-label" for="swallow2">
            88 mph.
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="swallow"
            id="swallow3"
            required
          />
          <label class="form-check-label" for="swallow3">
            3 m/s.
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="swallow"
            id="swallow4"
            required
          />
          <label class="form-check-label" for="swallow4">
            Am I wearing my{" "}
            <a href="https://letmegooglethat.com/?q=HD+Glasses+3000%3A+Limited+Edition">
              <em>
                <u>HD Glasses 3000: Limited Edition</u>&trade;
              </em>
            </a>
            &nbsp;?
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="swallowWork">
          Please show your work for the above problem:
        </label>
        <textarea
          id="swallowWork"
          name="swallowWork"
          rows="5"
          className="form-control"
        ></textarea>
      </div>

      <div className="mb-5">
        <label>5.) Did you select Mars for number 3?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="marsCheck"
            id="marsCheck1"
            required
          />
          <label class="form-check-label" for="marsCheck1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="marsCheck"
            id="marsCheck2"
            required
          />
          <label class="form-check-label" for="marsCheck2">
            No
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="blank">6.) Leave this blank!</label>
        <input
          id="blank"
          name="blank"
          type="text"
          className="form-control"
          pattern=""
        />
      </div>

      <div className="mb-5">
        <label>7.) Are you sure you're not a robot?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotDoubleCheck"
            id="robotDoubleCheck1"
            required
          />
          <label class="form-check-label" for="robotDoubleCheck1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotDoubleCheck"
            id="robotDoubleCheck2"
            required
          />
          <label class="form-check-label" for="robotDoubleCheck2">
            No
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotDoubleCheck"
            id="robotDoubleCheck3"
            required
          />
          <label class="form-check-label" for="robotDoubleCheck3">
            I'm not sure
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="mindRead">
          8.) What number am I thinking of right now?
        </label>
        <input
          id="mindRead"
          name="mindRead"
          type="number"
          step="1"
          className="form-control"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="notPlanet">
          9.) Planet on which you don't reside{" "}
          <small className="text-muted">(Earth or Mars)</small>:
        </label>
        <input
          id="notPlanet"
          name="notPlanet"
          type="text"
          className="form-control"
          pattern="Earth|Mars|earth|mars|HD Glasses"
          required
        />
        <span className="form-text text-muted">
          If you selected 'yes' in number 5, you must enter 'Earth' here. If
          'no', you must enter 'Mars'.
        </span>
      </div>

      <div className="mb-5">
        <label>
          10.) Complete this sentence: The quick brown fox __________.
        </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="foxQuestion"
            id="foxQuestion1"
            required
          />
          <label class="form-check-label" for="foxQuestion1">
            wasn't quick enough and ended up mounted over a hunter's fireplace
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="foxQuestion"
            id="foxQuestion2"
            required
          />
          <label class="form-check-label" for="foxQuestion2">
            jumped over the lazy dog
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="foxQuestion"
            id="foxQuestion3"
            required
          />
          <label class="form-check-label" for="foxQuestion3">
            is in therapy for a severe case of kleptomania. Aww man!
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="foxQuestion"
            id="foxQuestion4"
            required
          />
          <label class="form-check-label" for="foxQuestion4">
            was sued by his ex-wife over missed child support payments.
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label>11.) Are you now or have you ever been a terrorist?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="terrorist1"
            required
          />
          <label class="form-check-label" for="terrorist1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="terrorist2"
            required
          />
          <label class="form-check-label" for="terrorist2">
            No
          </label>
        </div>
        <span className="form-text text-muted">(Check all that apply)</span>
      </div>

      <div className="mb-5">
        <label>12.) Does answer 9 match answer 3?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="planetCounterCheck"
            id="planetCounterCheck1"
            required
          />
          <label class="form-check-label" for="planetCounterCheck1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="planetCounterCheck"
            id="planetCounterCheck2"
            required
          />
          <label class="form-check-label" for="planetCounterCheck2">
            No
          </label>
        </div>
        <span className="form-text text-muted">
          Note: If answer 9 does not match answer 3, please revise answer 3
          accordingly.
        </span>
      </div>

      <div className="mb-5">
        <label>13.) Beep Boop Beep Bop-Boop Beep Beep Bop?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotBeep"
            id="robotBeep1"
            required
          />
          <label class="form-check-label" for="robotBeep1">
            Beep
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotBeep"
            id="robotBeep2"
            required
          />
          <label class="form-check-label" for="robotBeep2">
            Boop
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotBeep"
            id="robotBeep3"
            required
          />
          <label class="form-check-label" for="robotBeep3">
            Beep-Bop
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="robotBeep"
            id="robotBeep4"
            required
          />
          <label class="form-check-label" for="robotBeep4">
            I don't understand this question because I'm not a robot.
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="riddle">
          14.) You're driving a bus and leave the depot at 2pm. The first stop
          is at 2:16pm and three people get on. The second stop is at 2:31pm,
          where two more people get on and four people get off. The third stop
          is at 2:43pm, and one person gets off. What is the bus driver's name?
        </label>
        <input
          id="riddle"
          name="riddle"
          type="text"
          className="form-control"
          required
        />
      </div>

      <div className="mb-5">
        <label>15.) Which of these words is different from the others?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo1"
            required
          />
          <label class="form-check-label" for="riddleTwo1">
            More
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo2"
            required
          />
          <label class="form-check-label" for="riddleTwo2">
            Pairs
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo3"
            required
          />
          <label class="form-check-label" for="riddleTwo3">
            Avenge
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo4"
            required
          />
          <label class="form-check-label" for="riddleTwo4">
            Orange
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo5"
            required
          />
          <label class="form-check-label" for="riddleTwo5">
            Animal
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo6"
            required
          />
          <label class="form-check-label" for="riddleTwo6">
            Hasten
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="riddleTwo"
            id="riddleTwo7"
            required
          />
          <label class="form-check-label" for="riddleTwo7">
            HD Glasses 3000: Home & Office&trade;
          </label>
        </div>
      </div>

      <hr />

      <div className="mb-5">
        <label>
          Please read the{" "}
          <a href="/TandC" target="_blank">
            'Terms and Conditions'
          </a>{" "}
          page and select the appropriate box:
        </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="tAndC1"
            required
          />
          <label class="form-check-label" for="tAndC1">
            I have not read and understood the Terms and Conditions
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="tAndC2"
            required
          />
          <label class="form-check-label" for="tAndC2">
            I have read but not understood the Terms and Conditions
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="tAndC3"
            required
          />
          <label class="form-check-label" for="tAndC3">
            I have read and understood the Terms and Conditions
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="tAndC4"
            required
          />
          <label class="form-check-label" for="tAndC4">
            I checked all four boxes without reading them or the Terms and
            Conditions
          </label>
        </div>
      </div>

      <div className="form-group mb-5">
        <button name="submit" type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default FormPage;
