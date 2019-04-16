import React from 'react'
import Paper from '@material-ui/core/Paper'
import QuestionList from '../src/components/QuestionList'
import NewQuestion from '../src/components/NewQuestion'

const App = () => {
  const questions = [
    {
      id: '1',
      question: 'Can I have a raise?',
      askee: 'Boss',
      status: 'Rejected',
    },
    {
      id: '2',
      question: 'Can I have a vacation?',
      askee: 'Wife',
      status: 'Accepted',
    },
  ]

  return (
    <Paper>
      <NewQuestion />
      <QuestionList questions={questions} />
    </Paper>
  )
}

App.displayName = 'App'

export default App
