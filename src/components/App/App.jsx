import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import { useState, useEffect } from 'react'
import Feedback from '../Feedback/Feedback'

function App() {
 const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
 });

 const updateFeedback = (feedbackType) => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1
    }));
   console.log(values);
   console.log(totalFeedback)
 }
const resetFeedback = () => {
 setValues({
    good: 0,
    neutral: 0,
    bad: 0
 });
}

 const [totalFeedback, setTotalFeedback] = useState(0);
 const [positiveFeedback, setPositiveFeedback] = useState(0);

 useEffect(() => {
    const total = Object.values(values).reduce((acc, curr) => acc + curr, 0);
    setTotalFeedback(total);

    const positivePercentage = total > 0 ? ((values.good + values.neutral) / total) * 100 : 0;
    setPositiveFeedback(positivePercentage);
 }, [values]);
  
 return (
    <>
      <Description />
      <Options setValue={updateFeedback} resetValues={resetFeedback} />
      <Feedback value={values} totalfeedback={totalFeedback} positivefeedback={positiveFeedback} />
    </>
 )
}

export default App
