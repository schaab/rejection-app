import React from 'react'
import QuestionList from '../src/components/QuestionList'
import { ThemeProvider } from 'mineral-ui/themes'

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
    <ThemeProvider>
      <QuestionList questions={questions} />
    </ThemeProvider>
  )
}

App.displayName = 'App'

export default App
