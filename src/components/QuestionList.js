import React from 'react'
import PropTypes from 'prop-types'
import Flex from 'mineral-ui/Flex'
import Question from './Question'

const toQuestionComponent = ({ id, question, askee, status }) => (
  <Question key={id} question={question} askee={askee} status={status} />
)

const QuestionList = ({ questions = [] }) => {
  if (questions.length === 0) {
    return <div>Get asking to earn points!</div>
  }

  const questionList = questions.map(toQuestionComponent)

  return <Flex direction="column">{questionList}</Flex>
}

QuestionList.displayName = 'QuestionList'
QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string,
      askee: PropTypes.string,
      status: PropTypes.string,
    })
  ),
}

export default QuestionList
