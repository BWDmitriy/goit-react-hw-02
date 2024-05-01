import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import { useState, useEffect } from 'react'
import Feedback from '../Feedback/Feedback'

function App() {
 const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues); // Parse the string into an object
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
 });

 const updateFeedback = (feedbackType) => {
    setValues(prevValues => {
      const updatedValues = {
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1
      };
      window.localStorage.setItem("saved-values", JSON.stringify(updatedValues)); // Save the updated values to localStorage
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
    window.localStorage.setItem("saved-values", JSON.stringify(resetValues)); // Save the reset values to localStorage
 }

 const [totalFeedback, setTotalFeedback] = useState(0);
 const [positiveFeedback, setPositiveFeedback] = useState(0);

 useEffect(() => {
    const total = Object.values(values).reduce((acc, curr) => acc + curr, 0);
    setTotalFeedback(total);

    const positivePercentage = total > 0 ? Math.round(((values.good + values.neutral) / total) * 100) : 0;
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
