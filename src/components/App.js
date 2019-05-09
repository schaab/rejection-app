import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'

const App = ({ questions }) => {
  useEffect(() => localStorage.getItem('questions'), [])

  return (
    <Paper>
      <NewQuestion />
      <QuestionList questions={questions} />
    </Paper>
  )
}

App.displayName = 'App'
App.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string,
      askee: PropTypes.string,
      status: PropTypes.oneOf(['Rejected', 'Accepted']),
      time: PropTypes.instanceOf(Date),
    })
  ),
}

const mapStateToProps = ({ questions }) => ({
  questions,
})

export default connect(
  mapStateToProps,
)(App)
