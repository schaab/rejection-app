import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Question from '../Question'

describe('<Question />', () => {
  afterEach(cleanup)

  test('given no props it should render a default component', () => {
    const { container } = render(<Question />)

    expect(container).toHaveTextContent('')
    expect(container).toHaveTextContent('Unknown')
  })

  test('given a valid question it should render a question', () => {
    const { container } = render(
      <Question
        question="What is best in life?"
        askee="Arnold"
        status="Rejected"
      />
    )

    expect(container).toHaveTextContent('What is best in life?')
    expect(container).toHaveTextContent('Arnold')
  })

  test('given a partial question it should render a question', () => {
    const { container } = render(
      <Question question="What is best in life?" status="Rejected" />
    )

    expect(container).toHaveTextContent('What is best in life?')
    expect(container).toHaveTextContent('Unknown')
  })
})
