import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import { useState, useEffect } from 'react'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

function App() {
 const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues); 
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
 });

 useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values)); 
 }, [values]);

 const updateFeedback = (feedbackType) => {
    setValues(prevValues => {
      const updatedValues = {
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1
      };
      return updatedValues;
    });
 }

 const resetFeedback = () => {
    const resetValues = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    setValues(resetValues);
 }

 const totalFeedback = Object.values(values).reduce((acc, curr) => acc + curr, 0);
 const positiveFeedback = totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

 return (
    <>
      <Description />
      <Options setValue={updateFeedback} resetValues={resetFeedback} feedbackcount={totalFeedback} />
      {totalFeedback > 0 ? <Feedback value={values} totalfeedback={totalFeedback} positivefeedback={positiveFeedback} /> : <Notification />} 
    </>
 )
}

export default App
