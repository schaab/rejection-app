import { runSaga } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { getQuestions } from '../index'
import { fetchQuestionsSuccess, fetchQuestionsError } from '../../index'

describe('getQuestions', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('it should retrieve questions from storage', () => {
    const dispatched = []

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getQuestions
    )

    expect(dispatched).toEqual([
      {
        type: fetchQuestionsSuccess.type,
        payload: { questions: [] },
      },
    ])
  })

  test('it should dispatch an error when an exception occurs', () => {
    const iterator = getQuestions();
    iterator.next();

    const error = new Error('it\'s a trap')
    const expected = put(fetchQuestionsError(error.message))
    const actual = iterator.throw(error).value;
    expect(actual).toEqual(expected);
  })
})
