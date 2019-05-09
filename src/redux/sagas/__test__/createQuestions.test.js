import { runSaga } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { createQuestion } from '../index'
import { addQuestion, addQuestionError } from '../../index'

describe('getQuestions', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('given a new question it should put it in localStorage', () => {
    const dispatched = []
    const addQuestionAction = addQuestion()
    runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ questions: [addQuestionAction.payload] }),
      },
      createQuestion
    )

    const expected = JSON.stringify([addQuestionAction.payload])
    expect(localStorage.__STORE__['questions']).toBe(expected)
  })

  test('it should dispatch an error when an exception occurs', () => {
    const iterator = createQuestion()
    iterator.next()

    const error = new Error("it's a trap")
    const expected = put(addQuestionError(error.message))
    const actual = iterator.throw(error).value
    expect(actual).toEqual(expected)
  })
})
