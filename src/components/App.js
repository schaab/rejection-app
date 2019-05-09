import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import { bindActionCreators } from 'redux'
import { loadQuestions } from '../redux'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'

const App = ({ questions, dispatchLoadQuestions }) => {
  useEffect(() => {
    const questionsJson = localStorage.getItem('questions')
    const payload = {
      questions: questionsJson === null ? [] : JSON.parse(questionsJson),
    }
    dispatchLoadQuestions(payload)
  }, [dispatchLoadQuestions])

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
      id: PropTypes.string,
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ dispatchLoadQuestions: loadQuestions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
