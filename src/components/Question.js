import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import QuestionIcon from './QuestionIcon'

const Question = ({
  question = '',
  askee = 'Unknown',
  status = 'Rejected',
  time,
}) => {
  return (
    <ListItem>
      <QuestionIcon status={status} />
      <ListItemText primary={`${question} - ${askee}`} secondary={time} />
    </ListItem>
  )
}

Question.propTypes = {
  question: PropTypes.string,
  askee: PropTypes.string,
  status: PropTypes.oneOf(['Accepted', 'Rejected']),
  time: PropTypes.instanceOf(Date),
}

Question.displayName = 'Question'

export default Question
