import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./form.module.css";

const FormPage = () => (
  <Layout>
    <div class="alert alert-secondary mb-0" role="alert">
      INFORMATION
    </div>

    <div class="ms-3 mt-0 mb-5">*Please note: all fields are required.</div>

    <hr  class="mb-2"/>
    {/* Personal Info */}
    <form>
      <div class="form-group mb-2">
        <label for="text">Name</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
          </div>
          <input
            id="text"
            name="text"
            placeholder="Rusty Lumperbean"
            type="text"
            class="form-control"
            aria-describedby="textHelpBlock"
            required="required"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <span id="textHelpBlock" class="form-text text-muted">
          Tip: Don't type "Rusy Lumperbean" if that isn't your name!
        </span>
      </div>

      <div class="form-group mb-2">
        <label for="select1">Year of Birthing</label>
        <select
          id="select1"
          name="select1"
          class="form-control"
          required="required"
        >
          <option value="rabbit">Rabbit</option>
          <option value="duck">Duck</option>
          <option value="fish">Fish</option>
        </select>
      </div>

      <div class="form-group mb-2">
        <label for="select">Month</label>
        <select
          id="select"
          name="select"
          class="form-control"
          required="required"
        >
          <option value="January">January</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="Julio">Julio</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="November">November</option>
          <option value="Month 12">December</option>
        </select>
      </div>

      <div class="form-group mb-2">
        <label for="Date">Date</label>
        <select id="Date" name="Date" class="form-control" required="required">
          <option value="1">1 (Wun)</option>
          <option value="2">2 (Too)</option>
          <option value="3">3 (Three)</option>
          <option value="4">4 (Fow-er)</option>
          <option value="5">5 (Fife)</option>
          <option value="6">6 (Six)</option>
          <option value="7">7 (Sev-in)</option>
          <option value="8">8 (Aayt)</option>
          <option value="9">9 (Niner)</option>
          <option value="10">10 (Ten)</option>
          <option value="11">11 (ee-lev -in)</option>
          <option value="12">12 (12)</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23-31">23-31</option>
        </select>
      </div>

      <div class="form-group mb-2">
        <label>Day of the Week</label>
        <div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_0"
              type="radio"
              required="required"
              class="form-check-input"
              value="sunday"
            />
            <label for="dow_0" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_1"
              type="radio"
              required="required"
              class="form-check-input"
              value="monday"
            />
            <label for="dow_1" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_2"
              type="radio"
              required="required"
              class="form-check-input"
              value="tuesday"
            />
            <label for="dow_2" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_3"
              type="radio"
              required="required"
              class="form-check-input"
              value="wednesday"
            />
            <label for="dow_3" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_4"
              type="radio"
              required="required"
              class="form-check-input"
              value="thursday"
            />
            <label for="dow_4" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_5"
              type="radio"
              required="required"
              class="form-check-input"
              value="friday"
            />
            <label for="dow_5" class="form-check-label"></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              name="dow"
              id="dow_6"
              type="radio"
              required="required"
              class="form-check-input"
              value="saturday"
            />
            <label for="dow_6" class="form-check-label"></label>
          </div>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="text1">Approximate Time of Birth</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <FontAwesomeIcon icon={faSun} />
            </div>
          </div>
          <input
            id="text1"
            name="text1"
            placeholder="IMPORTANT: Please format time in standard Zulu time!!"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="select" class="col-4 col-form-label">
          Country of Residence:
        </label>
        <div class="col-8">
          <select
            id="select"
            name="select"
            class="form-control"
            aria-describedby="selectHelpBlock"
            required="required"
          >
            <option value="england">England</option>
            <option value="scotland">Scotland</option>
            <option value="wales">Wales</option>
            <option value="ireland">Ireland</option>
            <option value="n ireland">Northern Ireland</option>
            <option value="britain">Britain</option>
            <option value="GB">Great Britain</option>
            <option value="uk">U.K.</option>
            <option value="us">U.S.</option>
            <option value="the us">the U.S.</option>
            <option value="the us of a">the U.S. of A.</option>
            <option value="united states">United States</option>
            <option value="usa">The United States of America</option>
            <option value="america">America</option>
            <option value="merica">'merica</option>
            <option value="usa2">U.S.A.</option>
            <option value="Canada">Canada</option>
            <option value="mexico">Mexico</option>
            <option value="nf">New France</option>
            <option value="CSA">Confederate States of America</option>
            <option value="CR">California Republic</option>
            <option value="VR">Vermont Republic</option>
            <option value="RWF">Republic of West Florida</option>
            <option value="RT">Republic of Texas</option>
            <option value="KH">Kingdom of Hawaii</option>
            <option value="PS">Principality of Sealand</option>
            <option value="GB">Guantanamo Bay</option>
            <option value="ST">St. Thomas</option>
            <option value="SJ">St. John</option>
            <option value="SP">St. Patrick</option>
            <option value="RI">Riker's Island</option>
            <option value="AA">Arkham Asylum</option>
            <option value="Ak-48">Alaska</option>
          </select>
          <span id="selectHelpBlock" class="form-text text-muted">
            Please note: Service is currently only available in parts of North
            America and Northwestern Europe.
          </span>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="text3" class="col-4 col-form-label">
          Home landline telephone:
        </label>
        <div class="col-8">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-phone"></i>
              </div>
            </div>
            <input
              id="text3"
              name="text3"
              placeholder="123-456-7890"
              type="text"
              aria-describedby="text3HelpBlock"
              class="form-control"
            />
          </div>
          <span id="text3HelpBlock" class="form-text text-muted">
            IMPORTANT: Please do not provide a cellular number, as our current
            landline service cannot connect to cellular devices at this time.
          </span>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="text" class="col-4 col-form-label">
          Fax number:
        </label>
        <div class="col-8">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-fax"></i>
              </div>
            </div>
            <input
              id="text"
              name="text"
              placeholder="123-456-7890"
              type="text"
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="form-group mb-5">
        <div class="col-4"></div>
        <div class="col-8">
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              name="checkbox"
              id="checkbox_0"
              type="checkbox"
              checked="checked"
              class="custom-control-input"
              value="rabbit"
            />
            <label for="checkbox_0" class="custom-control-label">
              I agree to receive promotional offers and our bi-weekly newsletter
              "Testy Times" via fax at the above fax address.
            </label>
          </div>
        </div>
      </div>

      <hr class="mb-2"/>
      {/* Details */}
      <div class="form-group mb-2">
        <label for="text2">Annual Income</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <strike>X</strike>
            </div>
          </div>
          <input
            id="text2"
            name="text2"
            placeholder="919.54"
            type="text"
            aria-describedby="text2HelpBlock"
            class="form-control"
            required="required"
          />
        </div>
        <span id="text2HelpBlock" class="form-text text-muted">
          (In units of Roman Denarii. Tip: make sure to adjust for inflation!)
        </span>
      </div>

      <div class="form-group mb-2">
        <label for="text1" class="col-4 col-form-label">
          FBN ID Number:
        </label>
        <div class="col-8">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-empire"></i>
              </div>
            </div>
            <input
              id="text1"
              name="text1"
              placeholder="123-4-5-ABC/6"
              type="text"
              aria-describedby="text1HelpBlock"
              required="required"
              class="form-control"
            />
          </div>
          <span id="text1HelpBlock" class="form-text text-muted">
            Enter Your Government-Issued FBN ID
          </span>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="text2" class="col-4 col-form-label">
          SGTI Code:
        </label>
        <div class="col-8">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-institution"></i>
              </div>
            </div>
            <input
              id="text2"
              name="text2"
              placeholder="123-456-78901"
              type="text"
              aria-describedby="text2HelpBlock"
              class="form-control"
            />
          </div>
          <span id="text2HelpBlock" class="form-text text-muted">
            Please enter your State Government Taxpayer Identification Code
            (SGTI Code). <br/><em><strong>Note:</strong> If you do not know your SGTIC, please reference box
            14h of Form 1076-W, Schedules C & E.</em>
          </span>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="text4" class="col-4 col-form-label">
          SSN:
        </label>
        <div class="col-8">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-lock"></i>
              </div>
            </div>
            <input
              id="text4"
              name="text4"
              placeholder="123-45-6789"
              type="text"
              class="form-control"
              aria-describedby="text4HelpBlock"
              required="required"
            />
          </div>
          <span id="text4HelpBlock" class="form-text text-muted">
            Enter your Social Security Number as shown.
          </span>
        </div>
      </div>

      <hr class="mb-2"/>
      <div class="form-group mb-5">
      <Link to="/form2">
      <button class="me-2" type="submit">
      Next
      </button>
    </Link>
      </div>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default FormPage;
