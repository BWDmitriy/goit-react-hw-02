import styles from './Feedback.module.css';
import Notification from '../Notification/Notification';

const Feedback = (prop) => {
    return (
      <div>{prop.totalfeedback > 0
          ? `Good: ${prop.value.good};Neutral: ${prop.value.neutral};Bad: ${prop.value.bad}; `
            : <Notification />}
        </div>
      
);
}

export default Feedback;