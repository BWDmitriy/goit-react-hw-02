import './App.css'
import Profile from '../Profile/Profile'
import userData from '../../data/userData.json'
import FriendList from '../FriendList/FriendList'
import friends from '../../data/friends.json'
import transactions from '../../data/transactions.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
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

 useEffect(() => {
    const total = Object.values(values).reduce((acc, curr) => acc + curr, 0);
    setTotalFeedback(total);
 }, [values]);

 return (
    <>
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
      <Description />
      <Options setValue={updateFeedback} resetValues={resetFeedback} />
      <Feedback value={values} totalfeedback={totalFeedback} />
    </>
 )
}

export default App
