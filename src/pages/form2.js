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
      QUESTIONS
    </div>

    <hr  class="mb-2"/>
    {/* Personal Info */}
    <form>
    <div class="form-group mb-5">
    <label>Can you verify that you're not a robot?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="yes" required="required"/> 
        <label for="radio_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="no" required="required"/> 
        <label for="radio_1" class="custom-control-label">No</label>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label>Do you think robots have secretly infiltrated society, kidnapped people you know and replaced them with identical clones?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio1" id="radio1_0" type="radio" class="custom-control-input" value="yes" required="required"/> 
        <label for="radio1_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio1" id="radio1_1" type="radio" class="custom-control-input" value="no" required="required"/> 
        <label for="radio1_1" class="custom-control-label">No</label>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label for="select">Which planet do you reside on?</label> 
    <div>
      <select id="select" name="select" class="custom-select" required="required">
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
      </select>
    </div>
  </div>

  <div class="form-group mb-2">
    <label>What is the airspeed velocity of an unladen swallow?</label> 
    <div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio2" id="radio2_0" type="radio" class="custom-control-input" value="325" required="required"/> 
          <label for="radio2_0" class="custom-control-label">325 kph.</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio2" id="radio2_1" type="radio" class="custom-control-input" value="88" required="required"/> 
          <label for="radio2_1" class="custom-control-label">88 mph.</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio2" id="radio2_2" type="radio" class="custom-control-input" value="3" required="required"/> 
          <label for="radio2_2" class="custom-control-label">3 m/s.</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio2" id="radio2_3" type="radio" class="custom-control-input" value="A or E?" required="required"/> 
          <label for="radio2_3" class="custom-control-label">Is it African or European?</label>
        </div>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label for="textarea">Please show your work for the above problem:</label> 
    <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
  </div>

  <div class="form-group mb-5">
    <label>Did you select Mars for number 3?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio3" id="radio3_0" type="radio" class="custom-control-input" value="yes" required="required"/> 
        <label for="radio3_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio3" id="radio3_1" type="radio" class="custom-control-input" value="no" required="required"/> 
        <label for="radio3_1" class="custom-control-label">No</label>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label for="text">Leave this blank!</label> 
    <input id="text" name="text" type="text" class="form-control"/>
  </div>

  <div class="form-group mb-5">
    <label>Are you sure you're not a robot?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio4" id="radio4_0" type="radio" class="custom-control-input" value="y" required="required"/> 
        <label for="radio4_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio4" id="radio4_1" type="radio" class="custom-control-input" value="n" required="required"/> 
        <label for="radio4_1" class="custom-control-label">No</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio4" id="radio4_2" type="radio" class="custom-control-input" value="idk" required="required"/> 
        <label for="radio4_2" class="custom-control-label">I'm not sure</label>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label for="text1">What number am I thinking of right now?</label> 
    <input id="text1" name="text1" type="text" class="form-control" required="required"/>
  </div>

  <div class="form-group mb-5">
    <label for="text2">Planet on which you don't reside (Earth or Mars):</label> 
    <input id="text2" name="text2" type="text" class="form-control" aria-describedby="text2HelpBlock" required="required"/> 
    <span id="text2HelpBlock" class="form-text text-muted">If you selected 'yes' in number 5, you must enter 'Earth' here. If 'no', you must enter 'Mars'.</span>
  </div>

  <div class="form-group mb-5">
    <label>Complete this sentence: The quick brown fox __________.</label> 
    <div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio5" id="radio5_0" type="radio" class="custom-control-input" value="hunter" required="required"/> 
          <label for="radio5_0" class="custom-control-label">wasn't quick enough and ended up mounted over a hunter's fireplace</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio5" id="radio5_1" type="radio" class="custom-control-input" value="jumped" required="required"/> 
          <label for="radio5_1" class="custom-control-label">jumped over the lazy dog</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio5" id="radio5_2" type="radio" class="custom-control-input" value="klepto" required="required"/> 
          <label for="radio5_2" class="custom-control-label">Is in therapy for a severe case of kleptomania. Aww man!</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio5" id="radio5_3" type="radio" class="custom-control-input" value="payments" required="required"/> 
          <label for="radio5_3" class="custom-control-label">Was sued by his ex-wife over missed child support payments.</label>
        </div>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label>Are you now or have you ever been a terrorist?</label> 
    <div>
      <div class="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_0" type="checkbox" class="custom-control-input" value="y" aria-describedby="checkboxHelpBlock" required="required"/> 
        <label for="checkbox_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_1" type="checkbox" class="custom-control-input" value="n" aria-describedby="checkboxHelpBlock" required="required"/> 
        <label for="checkbox_1" class="custom-control-label">No</label>
      </div> 
      <span id="checkboxHelpBlock" class="form-text text-muted">(Check all that apply)</span>
    </div>
  </div>

  <div class="form-group mb-5">
    <label>Does answer 9 match answer 3?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio6" id="radio6_0" type="radio" class="custom-control-input" value="y" aria-describedby="radio6HelpBlock" required="required"/> 
        <label for="radio6_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio6" id="radio6_1" type="radio" class="custom-control-input" value="n" aria-describedby="radio6HelpBlock" required="required"/> 
        <label for="radio6_1" class="custom-control-label">No</label>
      </div> 
      <span id="radio6HelpBlock" class="form-text text-muted">Note: If answer 9 does not match answer 3, please revise answer 3 accordingly.</span>
    </div>
  </div>

  <div class="form-group mb-5">
    <label>Beep Boop Beep Bop-Boop Beep Beep Bop?</label> 
    <div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio7" id="radio7_0" type="radio" required="required" class="custom-control-input" value="beep"/> 
          <label for="radio7_0" class="custom-control-label">Beep</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio7" id="radio7_1" type="radio" required="required" class="custom-control-input" value="boop"/> 
          <label for="radio7_1" class="custom-control-label">Boop</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio7" id="radio7_2" type="radio" required="required" class="custom-control-input" value="beep-bop"/> 
          <label for="radio7_2" class="custom-control-label">Beep-Bop</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio7" id="radio7_3" type="radio" required="required" class="custom-control-input" value="idk"/> 
          <label for="radio7_3" class="custom-control-label">I don't understand this question because I'm not a robot.</label>
        </div>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label for="text3">You're driving a bus and leave the depot at 2pm. The first stop is at 2:16pm and three people get on. The second stop is at 2:31pm, where two more people get on and four people get off. The third stop is at 2:43pm, and one person gets off. What is the bus driver's name?</label> 
    <input id="text3" name="text3" type="text" class="form-control" required="required"/>
  </div>

  <div class="form-group mb-5">
    <label>Which of these words is different from the others?</label> 
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_0" type="radio" class="custom-control-input" value="Rome" required="required"/> 
        <label for="radio8_0" class="custom-control-label">More</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_1" type="radio" class="custom-control-input" value="Paris" required="required"/> 
        <label for="radio8_1" class="custom-control-label">Pairs</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_2" type="radio" class="custom-control-input" value="Geneva" required="required"/> 
        <label for="radio8_2" class="custom-control-label">Avenge</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_3" type="radio" class="custom-control-input" value="orange" required="required"/> 
        <label for="radio8_3" class="custom-control-label">Orange</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_4" type="radio" class="custom-control-input" value="Manila" required="required"/> 
        <label for="radio8_4" class="custom-control-label">Animal</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio8" id="radio8_5" type="radio" class="custom-control-input" value="Athens" required="required"/> 
        <label for="radio8_5" class="custom-control-label">Hasten</label>
      </div>
    </div>
  </div>

  <div class="form-group mb-5">
    <label>Please read the 'Terms and Conditions' page and select the appropriate box:</label> 
    <div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox1" id="checkbox1_0" type="checkbox" class="custom-control-input" value="1" required="required"/> 
          <label for="checkbox1_0" class="custom-control-label">I have not read and understood the Terms and Conditions</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox1" id="checkbox1_1" type="checkbox" class="custom-control-input" value="2" required="required"/> 
          <label for="checkbox1_1" class="custom-control-label">I have read but not understood the Terms and Conditions</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox1" id="checkbox1_2" type="checkbox" class="custom-control-input" value="3" required="required"/> 
          <label for="checkbox1_2" class="custom-control-label">I have read and understood the Terms and Conditions</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox1" id="checkbox1_3" type="checkbox" class="custom-control-input" value="4" required="required"/> 
          <label for="checkbox1_3" class="custom-control-label">I checked all four boxes without reading them or the Terms and Conditions</label>
        </div>
      </div>
    </div>
  </div> 

  <div class="form-group mb-5">
    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
  </div>

    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default FormPage;
