import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Score from '../Score'

describe('<Score />', () => {
  afterEach(cleanup)

  test('given nothing it should default to 0 points', () => {
    const { container } = render(<Score />)

    const expected = 'Score: 0'

    expect(container).toHaveTextContent(expected)
  })

  test('given a score it should reflect that score', () => {
    const { container } = render(<Score score={8} />)

    const expected = 'Score: 8'

    expect(container).toHaveTextContent(expected)
  })
})
