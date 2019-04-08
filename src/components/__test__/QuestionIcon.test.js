import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import QuestionIcon from '../QuestionIcon'

describe('<QuestionIcon />', () => {
  afterEach(cleanup)

  test('given no props it should render a default component', () => {
    const { container } = render(<QuestionIcon />)
    const actual = container.firstChild

    expect(actual).toMatchSnapshot()
  })

  test('given a rejected status it should render a rejected icon', () => {
    const { container } = render(<QuestionIcon status="Rejected" />)
    const actual = container.firstChild

    expect(actual).toMatchSnapshot()
  })

  test('given an accepted status it should render an accepted icon', () => {
    const { container } = render(<QuestionIcon status="Accepted" />)
    const actual = container.firstChild

    expect(actual).toMatchSnapshot()
  })
})
