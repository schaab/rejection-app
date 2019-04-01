import React from "react";
import PropTypes from "prop-types";

const QuestionMeta = ({ content = "", ...props }) => (
  <span {...props}>{content}</span>
);

QuestionMeta.displayName = "QuestionText";
QuestionMeta.propTypes = {
  content: PropTypes.string
};

export default QuestionMeta;
