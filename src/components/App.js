import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import { bindActionCreators } from 'redux'
import { loadQuestions } from '../redux'
import { scoreSelector } from '../redux/selectors'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'

const App = ({ questions, score, dispatchLoadQuestions }) => {
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
      <div>
        <strong>Score:</strong> {score}
      </div>
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
  score: PropTypes.number,
}

const mapStateToProps = ({ questions }) => ({
  questions,
  score: scoreSelector(questions),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ dispatchLoadQuestions: loadQuestions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
