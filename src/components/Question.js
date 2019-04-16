import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import QuestionIcon from './QuestionIcon'

const Question = ({
  question = '',
  askee = 'Unknown',
  status = 'Rejected',
}) => {
  return (
    <ListItem>
      <QuestionIcon status={status} />
      <ListItemText primary={question} secondary={askee} />
    </ListItem>
  )
}

Question.propTypes = {
  question: PropTypes.string,
  askee: PropTypes.string,
  status: PropTypes.oneOf(['Accepted', 'Rejected']),
}

Question.displayName = 'Question'

export default Question
