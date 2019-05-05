import { questionsReducer, fetchQuestionsSuccess } from '../index'

describe('questions reducer', () => {
  test('given nothing it should return the default state', () => {
    const actual = questionsReducer()
    expect(actual).toEqual([])
  })

  const createQuestion = ({
    id,
    question,
    askee,
    status,
    time = 1233455234,
  }) => ({
    id,
    question,
    askee,
    status,
    time,
  })

  test(`given a ${
    fetchQuestionsSuccess.type
  } action it should return questions`, () => {
    const state = []
    const action = {
      ...fetchQuestionsSuccess,
      payload: {
        questions: [
          createQuestion({
            id: 1,
            question: 'May I have your car',
            askee: 'stranger',
            status: 'Rejected',
          }),
          createQuestion({
            id: 2,
            question: 'May I have the CEO position',
            askee: 'President',
            status: 'Accepeted',
          }),
        ],
      },
    }
    const actual = questionsReducer(state, action)

    expect(actual).toEqual(action.payload.questions)
  })
})
