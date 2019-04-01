import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import Question from "./Question";

const toQuestionComponent = ({ question, askee, status }) => (
  <Question key={question} question={question} askee={askee} status={status} />
);

const QuestionList = ({ questions = [] }) => {
  if (questions.length === 0) {
    return <div>Get asking to earn points!</div>;
  }

  const questionList = questions.map(toQuestionComponent);

  return <List>{questionList}</List>;
};

QuestionList.displayName = "QuestionList";
QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      askee: PropTypes.string,
      status: PropTypes.string
    })
  )
};

export default QuestionList;
