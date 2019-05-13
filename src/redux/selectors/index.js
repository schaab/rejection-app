const questionStatusToScore = ({ status }) => {
    if (status === 'Accepted') {
        return 1;
    }
    
    return status === 'Rejected' ? 10 : 0
}

export const scoreSelector = (questions = []) =>
  questions.map(questionStatusToScore).reduce((a, b) => a + b, 0)
