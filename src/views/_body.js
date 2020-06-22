import React from 'react'

import Userdata from './userdata'
import NextCheckup from './checkup'
import CoachingCard from './coaching'
import VitalsCard from './vitals';

import { BarChart, ProgressBar } from '../components'

export default function _body() {

  return (
    <section className='app-body'>

      <div className="body-wrapper">

        <div className="section-1">

          <Userdata />

          <NextCheckup />

        </div>

        <div className="section-2">

          <div className="card dark water-balance">

            <ProgressBar progress={65} />

            <BarChart
              theme='light'
              goalValue={2.5}
              goalMetric='litres/day'
              caption='Water Balance'
              dataset={[65, 75, 90, 70, 60, 63, 45]}
            />

          </div>

          <div className="card light activity">

            <BarChart
              theme='dark'
              caption='Activity'
              goalValue={31}
              goalMetric='min/day'
              dataset={[65, 75, 90, 70, 60, 63, 45]}
            />

          </div>

          <div className="card light sleep">

            <BarChart
              theme='dark'
              caption='Sleep'
              goalValue={7.3}
              goalMetric='hours/day'
              dataset={[65, 75, 90, 70, 60, 63, 45]}
            />

          </div>

          <CoachingCard/>

          <VitalsCard/>

        </div>

      </div>

    </section>
  )
}
