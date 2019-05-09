import { combineReducers } from 'redux'

let nextId = 1
export const addQuestion = ({
  question = 'What is your name',
  askee = 'stranger',
  status = 'Rejected',
} = {}) => ({
  type: addQuestion.type,
  payload: {
    id: `${nextId++}`,
    question,
    askee,
    status,
    time: Date(),
  },
})
addQuestion.type = 'ADD_QUESTION'

export const addQuestionError = ({
  message = 'failure',
} = {}) => ({
  type: addQuestionError.type,
  payload: {
    message,
  }
})
addQuestionError.type = 'ADD_QUESTION_ERROR'

export const addQuestionSuccess = () => ({
  type: addQuestionSuccess.type,
})
addQuestionSuccess.type = 'ADD_QUESTION_SUCCESS'

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
    case addQuestionSuccess.type:
      return initialState
    default:
      return state
  }
}

export const questionsReducer = (
  state = [],
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case addQuestion.type:
      return [...state, payload];
    default:
      return state
  }
}

const rejectionApp = combineReducers({
  newQuestionReducer,
  questions: questionsReducer,
})

export default rejectionApp
