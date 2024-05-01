import styles from './Options.module.css';

const Options = (props) => {
 const handleButtonClick = (feedbackType) => {
    props.setValue(feedbackType);
 }

 const handleReset = () => {
    props.resetValues();
 }

 return (
<div className='divider'><button onClick={() => handleButtonClick('good')}>Good</button>
      <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
      <button onClick={() => handleButtonClick('bad')}>Bad</button>
      <button onClick={() => handleReset()}>Reset</button></div>
         
 );
}

export default Options;
