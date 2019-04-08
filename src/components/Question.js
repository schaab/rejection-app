import React from 'react'
import PropTypes from 'prop-types'
import { FlexItem } from 'mineral-ui/Flex'
import Text from 'mineral-ui/Text'
import QuestionIcon from './QuestionIcon'

const Question = ({
  question = '',
  askee = 'Unknown',
  status = 'Rejected',
}) => {
  return (
    <FlexItem>
      <QuestionIcon status={status} />
      <Text className="question-text">{question}</Text>
      <Text className="question-askee">{askee}</Text>
    </FlexItem>
  )
}

Question.propTypes = {
  question: PropTypes.string,
  askee: PropTypes.string,
  status: PropTypes.oneOf(['Accepted', 'Rejected']),
}

Question.displayName = 'Question'

export default Question
