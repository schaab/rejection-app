import reducer, { updateQuestion, updateAskee, updateStatus } from '../newQuestion'

describe('newQuestion reducer', () => {
    const createState = ({ question = 'Give me your wallet', askee = 'tourist', status = 'Accepted' } = {}) => ({question, askee, status});

    test('given no args it should return a valid default state', () => {
        const actual = reducer();
        const expected = createState({ question: '', askee: '', status: 'Rejected'});

        expect(actual).toEqual(expected);
    });

    test(`given initial state and an ${ updateQuestion.type } action, it should update the question`, () => {
        const action = updateQuestion({ question: 'How are you' });
        const actual = reducer(createState(), action);

        const expected = createState({ question: 'How are you' });

        expect(actual).toEqual(expected);
    });

    test(`given initial state and an ${ updateAskee.type } action, it should update the question`, () => {
        const action = updateAskee({ askee: 'Boss' });
        const actual = reducer(createState(), action);

        const expected = createState({ askee: 'Boss' });

        expect(actual).toEqual(expected);
    });

    test(`given initial state and an ${ updateStatus.type } action, it should update the question`, () => {
        const action = updateStatus({ status: 'Rejected' });
        const actual = reducer(createState(), action);

        const expected = createState({ status: 'Rejected'});

        expect(actual).toEqual(expected);
    });
});