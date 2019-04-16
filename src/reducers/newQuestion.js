export const updateQuestion = ({ question = 'Nothing to see here' }) => ({ type: updateQuestion.type, payload: { question }});
updateQuestion.type = 'UPDATE_QUESTION';

export const updateAskee = ({ askee = 'Unknown' }) => ({ type: updateAskee.type, payload: { askee }});
updateAskee.type = 'UPDATE_ASKEE';

export const updateStatus = ({ status = 'Rejected' }) => ({ type: updateStatus.type, payload: { status }});
updateStatus.type = 'UPDATE_STATUS';

const initialState = {
    question: '',
    askee: '',
    status: 'Rejected',
};

const reducer = (state = initialState, { type = '', payload = {}} ={}) => {
    switch(type) {
        case updateQuestion.type:
            return {
                ...state,
                question: payload.question,
            };
        case updateAskee.type:
            return {
                ...state,
                askee: payload.askee,
            };
        case updateStatus.type:
            return {
                ...state,
                status: payload.status,
            };
        default:
            return state;
    }
};

export default reducer;