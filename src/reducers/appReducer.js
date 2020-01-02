import * as actions from '../actions/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100 + 1)
}

export const appReducer = (state = initialState, action) => {
    if(action.type === actions.RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100 + 1)
        });
    } else if (action.type === actions.ADD_GUESS) {
        console.log(state.correctAnswer);
        const difference = Math.abs(action.guess - state.correctAnswer);
        
        let feedback;
            if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
            } else {
            feedback = 'You got it!';
            }

        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback: feedback
        });
    } 
    return state;
}