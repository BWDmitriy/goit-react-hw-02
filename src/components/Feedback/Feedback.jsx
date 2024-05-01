import Notification from '../Notification/Notification';

const Feedback = ({value, totalfeedback, positivefeedback}) => {
    return (
      <div className='divider'>{totalfeedback > 0
          ? <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
                <p>Total: {totalfeedback}</p>
                <p>Positive: {positivefeedback}%</p>
    </div>
            : <Notification />}
        </div>
      
);
}

export default Feedback;

