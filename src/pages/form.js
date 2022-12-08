import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./form.module.css";

const FormPage = () => (
  <Layout>
    <form>
      <div class="form-group mb-5">
        <label for="text">Name</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
            <FontAwesomeIcon icon={faAddressCard}/>
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
            <FontAwesomeIcon icon={faChevronDown}/>
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
          aria-describedby="select1HelpBlock"
          required="required"
        >
          <option value="rabbit">Rabbit</option>
          <option value="duck">Duck</option>
          <option value="fish">Fish</option>
        </select>
        <span id="select1HelpBlock" class="form-text text-muted">
          Year in which your mother evicted you from her womb.
        </span>
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
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
              aria-describedby="dowHelpBlock"
              required="required"
              class="form-check-input"
              value="saturday"
            />
            <label for="dow_6" class="form-check-label"></label>
          </div>
          <span id="dowHelpBlock" class="form-text text-muted">
            Select the day of the week in which eviction occurred.
          </span>
        </div>
      </div>
      <div class="form-group mb-5">
        <label for="text1">Approximate Time of Birth</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
            <FontAwesomeIcon icon={faSun}/>
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
        <label for="text2">Annual Income</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><strike>X</strike></div>
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
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default FormPage;
