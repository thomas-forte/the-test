import * as React from "react";
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
import * as styles from "./form.module.css";

let listOfMonths = [
  <option value="January">January</option>,
  <option value="March">March</option>,
  <option value="April">April</option>,
  <option value="May">May</option>,
  <option value="June">June</option>,
  <option value="Julio">Julio</option>,
  <option value="August">August</option>,
  <option value="September">September</option>,
  <option value="November">November</option>,
  <option value="Month 12">December</option>,
];

let listOfDates = [
  <option value="1">1 (Wun)</option>,
  <option value="2">2 (Too)</option>,
  <option value="3">3 (Three)</option>,
  <option value="4">4 (Fow-er)</option>,
  <option value="5">5 (Fife)</option>,
  <option value="6">6 (Six)</option>,
  <option value="7">7 (Sev-in)</option>,
  <option value="8">8 (Aayt)</option>,
  <option value="9">9 (Niner)</option>,
  <option value="10">10 (Ten)</option>,
  <option value="11">11 (ee-lev -in)</option>,
  <option value="12">12 (12)</option>,
  <option value="13">13</option>,
  <option value="14">14</option>,
  <option value="15">15</option>,
  <option value="16">16</option>,
  <option value="17">17</option>,
  <option value="18">18</option>,
  <option value="19">19</option>,
  <option value="20">20</option>,
  <option value="21">21</option>,
  <option value="22">22</option>,
  <option value="23-31">23-31</option>,
];

let listOfCountries = [
  <option value="england">England</option>,
  <option value="scotland">Scotland</option>,
  <option value="wales">Wales</option>,
  <option value="ireland">Ireland</option>,
  <option value="n ireland">Northern Ireland</option>,
  <option value="britain">Britain</option>,
  <option value="GB">Great Britain</option>,
  <option value="uk">U.K.</option>,
  <option value="us">U.S.</option>,
  <option value="the us">the U.S.</option>,
  <option value="the us of a">the U.S. of A.</option>,
  <option value="united states">United States</option>,
  <option value="usa">The United States of America</option>,
  <option value="america">America</option>,
  <option value="merica">'merica</option>,
  <option value="usa2">U.S.A.</option>,
  <option value="Canada">Canada</option>,
  <option value="mexico">Mexico</option>,
  <option value="nf">New France</option>,
  <option value="CSA">Confederate States of America</option>,
  <option value="CR">California Republic</option>,
  <option value="VR">Vermont Republic</option>,
  <option value="RWF">Republic of West Florida</option>,
  <option value="RT">Republic of Texas</option>,
  <option value="KH">Kingdom of Hawaii</option>,
  <option value="PS">Principality of Sealand</option>,
  <option value="GB">Guantanamo Bay</option>,
  <option value="ST">St. Thomas</option>,
  <option value="SJ">St. John</option>,
  <option value="SP">St. Patrick</option>,
  <option value="RI">Riker's Island</option>,
  <option value="AA">Arkham Asylum</option>,
  <option value="Ak-48">Alaska</option>,
];

function generateYearOptions() {
  const list = [];
  for (let c = 1700; c <= new Date().getFullYear(); c++) {
    list.push(c);
  }
  return list.map((i) => <option value={i}>{i}</option>);
}

function generateDayOfTheWeeks() {
  const list = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return list.map((dow) => (
    <input
      class="form-check-input form-check-inline"
      type="radio"
      name="dow"
      value={dow}
    />
  ));
}

function shuffleMonths() {
  listOfMonths = listOfMonths.sort((a, b) => 0.5 - Math.random());
}

const FormPage = () => (
  <Layout>
    <div class="alert alert-secondary mb-0" role="alert">
      INFORMATION
    </div>

    <div class="ms-3 mt-0 mb-5">*Please note: all fields are required.</div>

    <hr class="mb-2" />
    {/* Personal Info */}
    <form>
      <div class="mb-2">
        <label for="name" class="form-label">
          Name
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          <input
            type="text"
            class="form-control"
            name="name"
            required
            placeholder="Rusty Lumperbean"
          />
          <span class="input-group-text">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <span class="form-text text-muted">
          Tip: Don't type "Rusy Lumperbean" if that isn't your name!
        </span>
      </div>

      <div class="mb-2">
        <label for="yob">Year of Birthing</label>
        <select class="form-control" name="yob" required>
          {generateYearOptions()}
        </select>
      </div>

      <div class="mb-2">
        <label for="mob">Month</label>
        <select
          class="form-control"
          name="mob"
          required
          onclick={shuffleMonths()}
        >
          {listOfMonths}
        </select>
      </div>

      <div class="mb-2">
        <label for="date">Date</label>
        <select class="form-control" name="date" required>
          {listOfDates}
        </select>
      </div>

      <div class="mb-2">
        <label>Day of the Week</label>
        <div>{generateDayOfTheWeeks()}</div>
      </div>

      <div class="mb-2">
        <label for="time" class="form-label">
          Approximate Time of Birth
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faSun} />
          </span>
          <input type="time" class="form-control" name="time" />
        </div>
        <span class="form-text text-muted">
          IMPORTANT: Please format time in standard Zulu time!! Oh and please be
          exact.
        </span>
      </div>

      <div class="mb-2">
        <label for="country" class="form-label">
          Country of Residence:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faHouseFlag} />
          </span>
          <select class="form-control" name="country" required>
            {listOfCountries}
          </select>
        </div>
        <span class="form-text text-muted">
          Please note: Service is currently only available in parts of North
          America and Northwestern Europe.
        </span>
      </div>

      <div class="mb-2">
        <label for="phone" class="form-label">
          Home landline telephone:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <input
            type="tel"
            class="form-control"
            name="phone"
            required
            placeholder="440-867-5309"
          />
        </div>
        <span class="form-text text-muted">
          IMPORTANT: Please do not provide a cellular number, as our current
          landline service cannot connect to cellular devices at this time.
        </span>
      </div>

      <div class="mb-2">
        <label for="fax" class="form-label">
          Fax number:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faFax} />
          </span>
          <input
            type="tel"
            class="form-control"
            name="fax"
            required
            placeholder="440-867-5309"
          />
        </div>
      </div>

      <div class="form-check mb-5">
        <input class="form-check-input" type="checkbox" checked />
        <label class="form-check-label" for="flexCheckDefault">
          I agree to receive promotional offers and our bi-weekly newsletter
          "Testy Times" via fax at the above fax address.
        </label>
      </div>

      <hr />

      {/* Details */}
      <div class="mb-2">
        <label for="income" class="form-label">
          Annual Income:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <strike>X</strike>
          </span>
          <input
            type="number"
            class="form-control"
            name="income"
            required
            placeholder="919.54"
          />
        </div>
        <span class="form-text text-muted">
          (In units of Roman Denarii. Tip: make sure to adjust for inflation!)
        </span>
      </div>

      <div class="mb-2">
        <label for="fbn" class="form-label">
          FBN ID Number:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faEmpire} />
          </span>
          <input
            type="text"
            class="form-control"
            name="fbn"
            required
            placeholder="123-4-5-ABC/6"
          />
        </div>
        <span class="form-text text-muted">
          Enter Your Government-Issued FBN ID
        </span>
      </div>

      <div class="mb-2">
        <label for="sgti" class="form-label">
          SGTI Code:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faInstitution} />
          </span>
          <input
            type="text"
            class="form-control"
            name="sgti"
            placeholder="123-456-78901"
          />
        </div>
        <span class="form-text text-muted">
          Please enter your State Government Taxpayer Identification Code (SGTI
          Code). <br />
          <em>
            <strong>Note:</strong> If you do not know your SGTIC, please
            reference box 14h of Form 1076-W, Schedules C & E.
          </em>
        </span>
      </div>

      <div class="mb-2">
        <label for="ssn" class="form-label">
          SSN:
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            type="text"
            class="form-control"
            name="ssn"
            required
            placeholder="123-450-6789"
          />
        </div>
        <span class="form-text text-muted">
          Enter your Social Security Number as shown.
        </span>
      </div>

      <hr />

      <div class="form-group">
        <Link to="/form2">
          <button type="submit">Next</button>
        </Link>
      </div>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default FormPage;
