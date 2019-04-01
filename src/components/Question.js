import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import QuestionIcon from "./QuestionIcon";
import QuestionMeta from "./QuestionMeta";

const Question = ({
  question = "",
  askee = "Unknown",
  status = "Rejected"
}) => {
  const questionText = (
    <QuestionMeta content={question} data-testid="question-text" />
  );
  const questionAskee = (
    <QuestionMeta content={askee} data-testid="question-askee" />
  );
  return (
    <ListItem>
      <QuestionIcon status={status} />
      <ListItemText primary={questionText} secondary={questionAskee} />
    </ListItem>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  askee: PropTypes.string,
  status: PropTypes.oneOf(["Accepted", "Rejected"])
};

Question.displayName = "Question";

export default Question;
