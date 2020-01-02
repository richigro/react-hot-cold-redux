import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import GuessForm from './guess-form';


export function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback  guessCount={guessCount} />
      <GuessForm  />
    </section>
  );
}

// GuessSection.defaultProps = {
//   title: 'Board'
// }

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps) (GuessSection);