import { questionsReducer } from '../index'

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

})
