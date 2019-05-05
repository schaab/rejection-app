import { all, takeEvery, put, call } from 'redux-saga/effects'
import {
  fetchQuestionsSuccess,
  fetchQuestions,
  fetchQuestionsErorr,
} from '../index'

export const getQuestionsFromLocalStorage = () =>
  localStorage.getItem('questions')

export function* getQuestions() {
  try {
    // retrieve from local storage
    const questionsFromStorage = yield call(getQuestions)
    const questions =
      questionsFromStorage === null ? [] : JSON.parse(questionsFromStorage)
    yield put(fetchQuestionsSuccess(questions))
  } catch (e) {
    yield put(fetchQuestionsErorr())
  }
}

export function* watchFetchQuestions() {
  yield takeEvery(fetchQuestions.type, getQuestions)
}

export function* createQuestion({ payload = {} } = {}) {
  try {
    const questions = yield call(getQuestions)

    yield call(
      localStorage.setItem,
      'questions',
      JSON.stringify([...questions, payload])
    )
    yield put({ type: 'FETCH_QUESTIONS' })
  } catch (e) {
    console.error('createQuestion.error', e.message)
  }
}

export function* watchAddQuestion() {
  yield takeEvery('ADD_QUESTION', createQuestion)
}

export default function* rootSaga() {
  yield all([watchAddQuestion(), watchFetchQuestions()])
}
