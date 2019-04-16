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

export const fetchQuestions = () => ({ type: 'FETCH_QUESTIONS' })

export const questionsReducer = (
  state = [],
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return payload.questions
    default:
      return state
  }
}

const rejectionApp = combineReducers({
  newQuestionReducer,
  questionsReducer,
})

export default rejectionApp
