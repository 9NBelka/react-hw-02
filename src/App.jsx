
import {useEffect, useState} from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {

  const [grade, setGrade] = useState (() => {
    const savedGrade = localStorage.getItem("my-grade")
    return savedGrade ? JSON.parse(savedGrade) : {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    localStorage.setItem("my-grade", JSON.stringify(grade));
  },[grade])
  

  const updateFeedback = feedbackType => {
    setGrade({
      ...grade,
      [feedbackType]: grade[feedbackType] + 1,
    });
  }

  const resetFeedback = () => {
    setGrade({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedback = grade.good + grade.neutral + grade.bad; 
  const positiveFeedback = totalFeedback ? Math.round((grade.good / totalFeedback) * 100) : 0;


  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} total={totalFeedback}/>
      {totalFeedback > 0 ? <Feedback positive={positiveFeedback} grade={grade} total={totalFeedback}></Feedback> : <h4>No feedback yet</h4>}
    </>
  )
}

export default App
