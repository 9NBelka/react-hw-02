
import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {

  const [grade, setGrade] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    setGrade({
      ...grade,
      [feedbackType]: grade[feedbackType] + 1,
    });
  }

  const totalFeedback = grade.good + grade.neutral + grade.bad; 

  // useEffect(() => {

  // }, [grade])

  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}/>
      <Feedback grade={grade} total={totalFeedback}></Feedback>
    </>
  )
}

export default App
