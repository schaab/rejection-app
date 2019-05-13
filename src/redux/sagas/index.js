import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { addQuestion, addQuestionError } from '../index'

const setQuestions = questions => localStorage.setItem('questions', questions)
const questionsSelector = ({ questions }) => questions

export function* createQuestion() {
  try {
    const questions = yield select(questionsSelector)

    yield call(setQuestions, JSON.stringify([...questions]))
  } catch (e) {
    yield put(addQuestionError(e.message))
  }
}

export function* watchAddQuestion() {
  yield takeEvery(addQuestion.type, createQuestion)
}

export default function* rootSaga() {
  yield all([watchAddQuestion()])
}
