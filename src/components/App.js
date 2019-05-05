import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import { fetchQuestions } from '../redux';
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'

const App = ({ questions, dispatchFetchQuestions }) => {
  useEffect(() => dispatchFetchQuestions, [dispatchFetchQuestions])

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

const mapDispatchToProps = (dispatch) => bindActionCreators({ dispatchFetchQuestions: fetchQuestions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
