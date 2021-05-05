const FeedbackOptions = ({onLeaveFeedback }) => (
  <div>
    <button type="button" onClick={onLeaveFeedback}>good</button>
    <button type="button" onClick={onLeaveFeedback}>neutral</button>
    <button type="button" onClick={onLeaveFeedback}>bad</button>
  </div>
);

export default FeedbackOptions;