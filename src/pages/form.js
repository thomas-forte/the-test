import React, { useState } from "react";
import InputMask from "react-input-mask";
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

      <hr className="mb-3" />
      {/* Personal Info */}
      <form action="../form2">
        <div className="mb-3">
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

        <div className="mb-3">
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
              <option value="">-</option>
              {generateYearsAsSelectOptions()}
            </select>
            <span className="input-group-text">A.D.</span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="mob">Month</label>
          <select
            className="form-control"
            name="mob"
            required
            onMouseDown={() => shuffleMonths()}
          >
            <option value="">-</option>
            {state.listOfMonths}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date">Date</label>
          <select className="form-control" name="date" required>
            <option value="">-</option>
            {datesAsSelectOptions}
          </select>
        </div>

        <div className="mb-3">
          <label>Day of the Week</label>
          <div>{generateDayOfTheWeekRadioButtons()}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Approximate Time of Birth
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSun} />
            </span>
            <input type="time" className="form-control" name="time" required />
          </div>
          <span className="form-text text-muted">
            IMPORTANT: Please format time in standard Zulu time!! Oh and please
            be exact.
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country of Residence:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faHouseFlag} />
            </span>
            <select className="form-control" name="country" required>
              <option value="">-</option>
              {countriesAsSelectOptions}
            </select>
          </div>
          <span className="form-text text-muted">
            Please note: Service is currently only available in parts of North
            America and Northwestern Europe.
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Home landline telephone:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <InputMask
              type="tel"
              className="form-control"
              name="phone"
              required
              placeholder="440-867-5309"
              mask="999-999-9999"
            />
          </div>
          <span className="form-text text-muted">
            IMPORTANT: Please DO NOT provide a cellular number, as our current
            landline service cannot connect to cellular devices at this time.
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="fax" className="form-label">
            Fax number:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faFax} />
            </span>
            <InputMask
              type="tel"
              className="form-control"
              name="fax"
              required
              placeholder="440-867-5309"
              mask="999-999-9999"
            />
          </div>
        </div>

        <div className="form-check mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            required
            onChange={(evt) => {
              if (!evt.target.checked) {
                console.log(evt.target.checked);
                evt.stopPropagation();
                evt.target.checked = true;
                return;
              }
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to receive promotional offers and our bi-weekly newsletter
            "Testy Times" via fax at the above fax address.
          </label>
        </div>

        <hr />

        {/* Details */}
        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="fbn" className="form-label">
            FBN ID Number:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEmpire} />
            </span>
            <InputMask
              type="text"
              className="form-control"
              name="fbn"
              required
              placeholder="123-4-5-ABC/6"
              mask="999-9-9-aaa/9"
            />
          </div>
          <span className="form-text text-muted">
            Enter Your Government-Issued FBN ID
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="sgti" className="form-label">
            SGTI Code:
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faInstitution} />
            </span>
            <InputMask
              type="text"
              className="form-control"
              name="sgti"
              placeholder="123-456-78901"
              required
              mask="999-999-99999"
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

        <div className="mb-3">
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
          <button type="submit">Next</button>
        </div>
      </form>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default FormPage;
