import './_styles.scss'
import React from 'react'

export default function bar_chart({ theme='dark', caption='chart caption', dataset=[], goalValue=0, goalMetric='metric/day' }) {

  return (
    <div className={`bar-chart`}>

      <div className="chart">
        {
          dataset.map((a,index) =>
            <div
              key={index}
              className={`${theme} bar-${index+1}`}
              style={{gridRowStart: (100-a)}}
            />
          )
        }
      </div>

      <div className={`caption ${theme}`}>
        {caption}
      </div>

      <div className={`goal ${theme}`}>
        <div className="value">{goalValue}</div>
        <div className="metric">{goalMetric}</div>
      </div>

    </div>
  )
}
