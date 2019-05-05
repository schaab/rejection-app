import { runSaga } from 'redux-saga'
import { getQuestions } from '../index'
import { fetchQuestionsSuccess, fetchQuestionsErorr } from '../../index'

describe('getQuestions', () => {
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
    const dispatched = []

    runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getQuestions
    )

    expect(dispatched).toEqual([
      {
        type: fetchQuestionsErorr.type,
      },
    ])
  })
})
