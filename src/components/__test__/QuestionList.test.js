import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import QuestionList from '../QuestionList'

describe('<QuestionList />', () => {
  afterEach(cleanup)

  test('given nothing it should render an encouraging message to get asking', () => {
    const { container } = render(<QuestionList />)

    expect(container).toHaveTextContent('Get asking to earn points!')
  })

  const createQuestion = ({
    id = '',
    question = '',
    askee = '',
    status = '',
  }) => ({
    id,
    question,
    askee,
    status,
  })

  test('given a list containing a single question it should render it', () => {
    const questions = [
      createQuestion({
        id: '22',
        question: 'May I have a $10,000 raise?',
        askee: 'boss',
        status: 'Rejected',
      }),
    ]
    const { container } = render(<QuestionList questions={questions} />)

    expect(container).toHaveTextContent('May I have a $10,000 raise?')
  })
})
