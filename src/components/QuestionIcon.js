import React from "react";
import PropTypes from "prop-types";
import AcceptedIcon from "./AcceptedIcon";
import RejectedIcon from "./RejectedIcon";

const REJECTED = "Rejected";

const QuestionIcon = ({ status = REJECTED }) =>
  status === REJECTED ? <RejectedIcon /> : <AcceptedIcon />;

QuestionIcon.displayName = "QuestionIcon";
QuestionIcon.propTypes = {
  status: PropTypes.string
};

export default QuestionIcon;
