import { all, takeEvery, put, call } from 'redux-saga/effects'

export function* fetchQuestions() {
  try {
    // retrieve from local storage
    const questions = yield call(localStorage.getItem, 'questions')
    yield put({
      type: 'FETCH_QUESTIONS_SUCCESS',
      payload: {
        questions: JSON.parse(questions),
      },
    })
  } catch (e) {
    console.error('fetchQuestions error:', e.message)
  }
}

export function* watchFetchQuestions() {
  yield takeEvery('FETCH_TODOS', fetchQuestions)
}

export const getQuestions = () => localStorage.getItem('questions')

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
