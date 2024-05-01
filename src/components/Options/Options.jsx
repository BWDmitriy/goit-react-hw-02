import styles from './Options.module.css';

const Options = (props) => {
 const handleButtonClick = (feedbackType) => {
    props.setValue(feedbackType);
 }

 const handleReset = () => {
    props.resetValues();
 }

 return (
    <>
      <button onClick={() => handleButtonClick('good')}>Good</button>
      <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
      <button onClick={() => handleButtonClick('bad')}>Bad</button>
      <button onClick={() => handleReset()}>Reset</button>   
    </>
 );
}

export default Options;
