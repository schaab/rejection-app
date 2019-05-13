import { questionsReducer, addQuestion, loadQuestions } from '../index'

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

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

  const toAssertionObj = (question) => {
    question.id = !!question.id
    question.time = !!question.time
    return question
  };
  const mapToAssertionObj = (state = []) => state.map(toAssertionObj)

  test(`given an ${addQuestion.type} it should add the question when there are no questions in state`, () => {
    
    const actual = pipe(
      () => questionsReducer(undefined, addQuestion()),
      mapToAssertionObj,
    )()

    const expected = [
      {
        id: true,
        question: 'What is your name',
        askee: 'stranger',
        status: 'Rejected',
        time: true
      }
    ]
    expect(actual).toEqual(expected)
  });

  test(`given an ${addQuestion.type} it should add the question when there are questions in state`, () => {
    const initialState = [
      createQuestion({
        id: 22,
        question: 'What is best in life',
        askee: 'Conan',
        status: 'Accepted',
      }),
    ]

    const actual = pipe(
      () => questionsReducer(initialState, addQuestion()),
      mapToAssertionObj,
    )()

    const expected = [
      {
        id: true,
        question: 'What is best in life',
        askee: 'Conan',
        status: 'Accepted',
        time: true,
      },
      {
        id: true,
        question: 'What is your name',
        askee: 'stranger',
        status: 'Rejected',
        time: true
      }
    ]
    expect(actual).toEqual(expected)
  });
})
