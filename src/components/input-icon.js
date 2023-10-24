import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputIcon = ({ icon }) => (
  <span className="input-group-text">
    <FontAwesomeIcon icon={icon} />
  </span>
);

export default InputIcon;
