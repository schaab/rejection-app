import { scoreSelector } from '../index'

describe('scoreSelector', () => {
  test('given no questions it should return a score of zero', () => {
    const expected = 0
    const actual = scoreSelector()

    expect(actual).toEqual(expected)
  })

  test('given a list of questions it should score unknown status as 0', () => {
    const expected = 0
    const questions = [{ status: 'Apple Sauce' }]
    const actual = scoreSelector(questions)

    expect(actual).toEqual(expected)
  })

  test('given a list of questions it should score rejected questions 10 points', () => {
    const expected = 10

    const questions = [{ status: 'Rejected' }]

    const actual = scoreSelector(questions)

    expect(actual).toBe(expected)
  })

  test('given a list of questions it should score accepted questions 1 points', () => {
    const expected = 1
    const questions = [{ status: 'Accepted' }]

    const actual = scoreSelector(questions)

    expect(actual).toBe(expected)
  })

  test('given a list of questions it should score them', () => {
    const expected = 11
    const questions = [{ status: 'Accepted' }, { status: 'Rejected' }]

    const actual = scoreSelector(questions)
    expect(actual).toBe(expected)
  })
})
