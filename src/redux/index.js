import { combineReducers } from 'redux'

let nextId = 0
export const addQuestion = ({
  question = 'What is your name',
  askee = 'stranger',
  status = 'Rejected',
}) => ({
  type: addQuestion.type,
  payload: {
    id: nextId++,
    question,
    askee,
    status,
    time: Date.now(),
  },
})
addQuestion.type = 'ADD_QUESTION'

export const updateQuestion = ({ question = 'Nothing to see here' }) => ({
  type: updateQuestion.type,
  payload: { question },
})
updateQuestion.type = 'UPDATE_QUESTION'

export const updateAskee = ({ askee = 'Unknown' }) => ({
  type: updateAskee.type,
  payload: { askee },
})
updateAskee.type = 'UPDATE_ASKEE'

export const updateStatus = ({ status = 'Rejected' }) => ({
  type: updateStatus.type,
  payload: { status },
})
updateStatus.type = 'UPDATE_STATUS'

const initialState = {
  question: '',
  askee: '',
  status: 'Rejected',
}

export const newQuestionReducer = (
  state = initialState,
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case updateQuestion.type:
      return {
        ...state,
        question: payload.question,
      }
    case updateAskee.type:
      return {
        ...state,
        askee: payload.askee,
      }
    case updateStatus.type:
      return {
        ...state,
        status: payload.status,
      }
    default:
      return state
  }
}

export const fetchQuestions = () => ({ type: fetchQuestions.type })
fetchQuestions.type = 'FETCH_QUESTIONS'

export const fetchQuestionsSuccess = (questions = []) => ({
  type: fetchQuestionsSuccess.type,
  payload: {
    questions,
  },
})
fetchQuestionsSuccess.type = 'FETCH_QUESTIONS_SUCCESS'

export const fetchQuestionsError = (e) => ({
  type: fetchQuestionsError.type,
  payload: e,
})
fetchQuestionsError.type = 'FETCH_QUESTIONS_ERROR'

export const questionsReducer = (
  state = [],
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case fetchQuestionsSuccess.type:
      return payload.questions
    case fetchQuestionsError.type:
      return [];
    case addQuestion.type:
      return [...state, payload];
    default:
      return state
  }
}

const rejectionApp = combineReducers({
  newQuestionReducer,
  questionsReducer,
})

export default rejectionApp
