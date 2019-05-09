import { combineReducers } from 'redux'

export const updateQuestion = ({ question = 'Nothing to see here' } = {}) => ({
  type: updateQuestion.type,
  payload: { question },
})
updateQuestion.type = 'UPDATE_QUESTION'

export const updateAskee = ({ askee = 'Unknown' } = {}) => ({
  type: updateAskee.type,
  payload: { askee },
})
updateAskee.type = 'UPDATE_ASKEE'

export const updateStatus = ({ status = 'Rejected' } = {}) => ({
  type: updateStatus.type,
  payload: { status },
})
updateStatus.type = 'UPDATE_STATUS'

export const questionSubmitted = () => ({
  type: questionSubmitted.type,
})
questionSubmitted.type = 'QUESTION_SUBMITTED'

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
    case questionSubmitted.type:
      return initialState
    default:
      return state
  }
}

export const addQuestion = ({
  question = 'What is your name',
  askee = 'stranger',
  status = 'Rejected',
} = {}) => ({
  type: addQuestion.type,
  payload: {
    question,
    askee,
    status,
    time: Date(),
  },
})
addQuestion.type = 'ADD_QUESTION'

export const addQuestionError = ({ message = 'failure' } = {}) => ({
  type: addQuestionError.type,
  payload: {
    message,
  },
})
addQuestionError.type = 'ADD_QUESTION_ERROR'

export const loadQuestions = ({ questions = [] } = {}) => ({
  type: loadQuestions.type,
  payload: {
    questions,
  },
})
loadQuestions.type = 'LOAD_QUESTIONS'

export const questionsReducer = (
  state = [],
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case addQuestion.type: {
      const nextId = state.reduce((a, b) => Math.max(a, b), 0)
      return [...state, { ...payload, id: nextId + 1 }]
    }
    case loadQuestions.type:
      return payload.questions
    default:
      return state
  }
}

const rejectionApp = combineReducers({
  questions: questionsReducer,
})

export default rejectionApp
