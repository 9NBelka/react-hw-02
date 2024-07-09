const Feedback = ({grade, total, positive}) => {
  return (
    <div>
      <h4>Good:{grade.good}</h4>
      <h4>Neutral:{grade.neutral}</h4>
      <h4>Bad:{grade.bad}</h4>
      <h4>Total:{total}</h4>
      <h4>Positive:{positive}%</h4>
    </div>
  )
}

export default Feedback