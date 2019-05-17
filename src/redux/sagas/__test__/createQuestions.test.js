import { put, select, call } from 'redux-saga/effects'
import { createQuestion, setQuestions } from '../index'
import { questionsSelector } from '../../selectors'
import { addQuestion, addQuestionError } from '../../index'

describe('getQuestions', () => {
  const iterator = createQuestion()

  test('it should grab all the questions', () => {
    const actual = iterator.next().value
    const expected = select(questionsSelector)

    expect(actual).toEqual(expected)
  })

  test('it should store the questions', () => {
      const actual = iterator.next([]).value
      const expected = call(setQuestions, JSON.stringify([]))
      
      expect(actual).toEqual(expected)
  })

  test('it should dispatch an error when an exception occurs', () => {
    const iterator = createQuestion()
    iterator.next()

    const error = new Error("it's a trap")
    const expected = put(addQuestionError())
    const actual = iterator.throw(error).value
    expect(actual).toEqual(expected)
  })
})
