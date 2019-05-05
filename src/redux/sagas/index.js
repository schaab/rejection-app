import { all, takeEvery, put, call } from 'redux-saga/effects'
import {
  fetchQuestionsSuccess,
  fetchQuestions,
  fetchQuestionsError,
  addQuestion,
} from '../index'

export const getQuestionsFromLocalStorage = () =>
  localStorage.getItem('questions')

export function* getQuestions() {
  try {
    const questionsFromStorage = yield call(getQuestionsFromLocalStorage)
    const questions =
      questionsFromStorage === null ? [] : JSON.parse(questionsFromStorage)
    yield put(fetchQuestionsSuccess(questions))
  } catch (e) {
    yield put(fetchQuestionsError(e.message))
  }
}

export function* watchFetchQuestions() {
  yield takeEvery(fetchQuestions.type, getQuestions)
}

export function* createQuestion({ payload = {} } = {}) {
  try {
    // get the questions from state

    yield call(
      localStorage.setItem,
      'questions',
      JSON.stringify([payload])
    )
    yield put({ type: 'FETCH_QUESTIONS' })
  } catch (e) {
    console.error('createQuestion.error', e.message)
  }
}

export function* watchAddQuestion() {
  yield takeEvery(addQuestion.type, createQuestion)
}

export default function* rootSaga() {
  yield all([watchAddQuestion(), watchFetchQuestions()])
}
