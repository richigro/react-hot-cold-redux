import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import './guess-form.css';

// import { GuessSection } from './guess-section';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props) {
      const value = this.input.value;
      this.props.dispatch(actions.addGuess(value));
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

// GuessForm.defaultProps = {
//   title: 'Board'
// }

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses
});

export default connect(mapStateToProps) (GuessForm);
