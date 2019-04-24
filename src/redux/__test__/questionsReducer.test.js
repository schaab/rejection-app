import { questionsReducer, fetchQuestions } from '../index';

describe('questions reducer', () => {
    test('given nothing it should return the default state', () => {
        const actual = questionsReducer();
        expect(actual).toEqual([]);
    });

    test(`given a ${fetchQuestions.type} action it should return questions`, () => {
        const state = [];
        const actual = questionsReducer(state, fetchQuestions());

        expect(actual).toEqual(state);
    });
});