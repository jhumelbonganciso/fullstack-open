import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {

    if (good === 0 && neutral === 0 && bad ===0) {
        return (
          <div>
            <h2>Statistics</h2>
            <p>no feedback given</p>
          </div>
        )
      }
  return (
    <div>
        <h2>Statistics</h2>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={good + neutral + bad} />
        <StatisticLine text={"average"} value={(good - bad) / (good + neutral + bad) } />
        <StatisticLine text={"positive"} value={good / (good + neutral + bad) * 100 } />
    </div>
  )
}

export default Statistics