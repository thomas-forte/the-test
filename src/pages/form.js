import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faChevronDown,
  faHouseFlag,
  faPhone,
  faFax,
  faInstitution,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./form.module.scss";

import {
  datesAsSelectOptions,
  monthsAsSelectOptions,
  generateYearsAsSelectOptions,
  generateDayOfTheWeekRadioButtons,
} from "../config/dates.config";
import countriesAsSelectOptions from "../config/countries.config";

function keyCodeIsNotADigit(keyCode) {
  return ![
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
  ].includes(keyCode);
}

const FormPage = () => {
  const [state, setState] = useState({
    listOfMonths: monthsAsSelectOptions,
  });

  function shuffleMonths() {
    setState({
      listOfMonths: state.listOfMonths.sort((a, b) => 0.5 - Math.random()),
    });
  }

  return (
    <Layout>
      <div className="alert alert-secondary mb-0" role="alert">
        INFORMATION
      </div>

      <div className="ms-3 mt-0 mb-5">
        *Please note: all fields are required.
      </div>

      <hr className="mb-2" />
      {/* Personal Info */}
      <form>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faAddressCard} />
            </span>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="Rusty Lumperbean"
            />
            <span className="input-group-text">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
          <span className="form-text text-muted">
            Tip: Don't type "Rusy Lumperbean" if that isn't your name!
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="yob">Year of Birthing</label>
          <div className="input-group">
            <select
              className={`form-control ${styles.remove_scrollbar}`}
              name="yob"
              required
              placeholder="Select..."
              onMouseDown={async (evt) => {
                if (evt.target.tagName === "SELECT") {
                  evt.target.size = 5;
                } else if (evt.target.tagName === "OPTION") {
                  await new Promise((r) => setTimeout(r, 10));
                  evt.target.parentElement.size = 1;
                  evt.stopPropagation();
                }
              }}
            >
              {generateYearsAsSelectOptions()}
            </select>
            <span className="input-group-text">A.D.</span>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="mob">Month</label>
          <select
            className="form-control"
            name="mob"
            required
            onMouseDown={() => shuffleMonths()}
          >
            {state.listOfMonths}
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="date">Date</label>
          <select className="form-control" name="date" required>
            {datesAsSelectOptions}
          </select>
        </div>

        <div className="mb-2">
          <label>Day of the Week</label>
          <div>{generateDayOfTheWeekRadioButtons()}</div>
        </div>

        <div className="mb-2">
          <label htmlFor="time" className="form-label">
            Approximate Time of Birth
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSun} />
            </span>
            <input type="time" className="form-control" name="time" />
          </div>
          <span className="form-text text-muted">
            IMPORTANT: Please format time in standard Zulu time!! Oh and please
            be exact.
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="country" className="form-label">
            Country of Residence:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faHouseFlag} />
            </span>
            <select className="form-control" name="country" required>
              {countriesAsSelectOptions}
            </select>
          </div>
          <span className="form-text text-muted">
            Please note: Service is currently only available in parts of North
            America and Northwestern Europe.
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="form-label">
            Home landline telephone:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input
              type="tel"
              className="form-control"
              name="phone"
              required
              placeholder="440-867-5309"
            />
          </div>
          <span className="form-text text-muted">
            IMPORTANT: Please DO NOT provide a cellular number, as our current
            landline service cannot connect to cellular devices at this time.
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="fax" className="form-label">
            Fax number:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faFax} />
            </span>
            <input
              type="tel"
              className="form-control"
              name="fax"
              required
              placeholder="440-867-5309"
            />
          </div>
        </div>

        <div className="form-check mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            checked
            readOnly
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to receive promotional offers and our bi-weekly newsletter
            "Testy Times" via fax at the above fax address.
          </label>
        </div>

        <hr />

        {/* Details */}
        <div className="mb-2">
          <label htmlFor="income" className="form-label">
            Annual Income:
          </label>
          <div className="input-group">
            <span className="input-group-text font-cardo">&#65942;</span>
            <input
              type="number"
              className="form-control"
              name="income"
              required
              placeholder="919.54"
              step="0.5"
            />
          </div>
          <span className="form-text text-muted">
            (In units of Roman Denarii. Tip: make sure to adjust for inflation!)
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="fbn" className="form-label">
            FBN ID Number:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEmpire} />
            </span>
            <input
              type="text"
              className="form-control"
              name="fbn"
              required
              placeholder="123-4-5-ABC/6"
              onKeyDown={(evt) => {
                if (evt.target.value?.length <= 2) {
                  if (
                    keyCodeIsNotADigit(evt.code) &&
                    evt.code !== "Backspace"
                  ) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  }
                } else if (evt.target.value?.length === 3) {
                  if (evt.code === "Backspace") {
                  } else if (keyCodeIsNotADigit(evt.code)) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  } else {
                    evt.target.value = evt.target.value + "-";
                  }
                } else if (evt.target.value?.length <= 4) {
                  if (
                    keyCodeIsNotADigit(evt.code) &&
                    evt.code !== "Backspace"
                  ) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  }
                } else if (evt.target.value?.length === 5) {
                  if (evt.code === "Backspace") {
                  } else if (keyCodeIsNotADigit(evt.code)) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  } else {
                    evt.target.value = evt.target.value + "-";
                  }
                } else if (evt.target.value?.length <= 6) {
                  if (
                    keyCodeIsNotADigit(evt.code) &&
                    evt.code !== "Backspace"
                  ) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  }
                } else if (evt.target.value?.length === 7) {
                  if (evt.code === "Backspace") {
                  } else if (keyCodeIsNotADigit(evt.code)) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                  } else {
                    evt.target.value = evt.target.value + "-";
                  }
                }
              }}
            />
          </div>
          <span className="form-text text-muted">
            Enter Your Government-Issued FBN ID
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="sgti" className="form-label">
            SGTI Code:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faInstitution} />
            </span>
            <input
              type="text"
              className="form-control"
              name="sgti"
              placeholder="123-456-78901"
            />
          </div>
          <span className="form-text text-muted">
            Please enter your State Government Taxpayer Identification Code
            (SGTI Code). <br />
            <em>
              <strong>Note:</strong> If you do not know your SGTIC, please
              reference box 14h of Form 1076-W, Schedules C & E.
            </em>
          </span>
        </div>

        <div className="mb-2">
          <label htmlFor="ssn" className="form-label">
            SSN:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="text"
              className="form-control"
              name="ssn"
              required
              placeholder="123-450-6789"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
            />
          </div>
          <span className="form-text text-muted">
            Enter your Social Security Number as shown.
          </span>
        </div>

        <hr />

        <div className="form-group">
          <Link to="/form2">
            <button type="submit">Next</button>
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default FormPage;
