import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Question from './Question'

const toQuestionComponent = ({ id, question, askee, status, time }) => (
  <Question key={id} question={question} askee={askee} status={status} time={time}/>
)

const QuestionList = ({ questions = [] }) => {
  if (questions.length === 0) {
    return <div>Get asking to earn points!</div>
  }
  return <List>{questions.map(toQuestionComponent)}</List>
}

QuestionList.displayName = 'QuestionList'
QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string,
      askee: PropTypes.string,
      status: PropTypes.string,
      time: PropTypes.instanceOf(Date)
    })
  ),
}

export default QuestionList
