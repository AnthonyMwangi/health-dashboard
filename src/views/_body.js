import React from 'react'

import Userdata from './userdata'
import NextCheckup from './checkup'
import CoachingCard from './coaching'
import VitalsCard from './vitals'
import MedicalRecord from './record'

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
              className='full'
              goalMetric='litres/day'
              caption='Water Balance'
              dataset={[65, 75, 90, 70, 60, 63, 45, 34, 50, 70]}
            />

          </div>

          <div className="card md light activity">

            <BarChart
              theme='dark'
              goalValue={31}
              caption='Activity'
              goalMetric='min/day'
              dataset={[65, 75, 90, 70, 60, 63, 45]}
            />

          </div>

          <div className="card md light sleep">

            <BarChart
              theme='dark'
              caption='Sleep'
              goalValue={7.3}
              goalMetric='hours/day'
              dataset={[65, 75, 90, 70, 60, 63, 45]}
            />

          </div>

          <CoachingCard />

          <VitalsCard />

        </div>

        <div className="section-3">

          <div className="section-title">MEDICAL RECORDS</div>

          <div className="section-wrapper">

            <MedicalRecord
              pages={5}
              icon='GrFreebsd'
              date='June 15'
              institution='Synevo Laboratory'
              title='Blood Biochemistry'
              statistics={[
                { count: 3, label: 'IMPROVED', trajectory: 'up' },
                { count: 1, label: 'WORSENED', trajectory: 'down' },
              ]}
            />

            <MedicalRecord
              pages={3}
              icon='GrHorton'
              date='May 12'
              institution='Omnio Clinic'
              title='Abdomen X-ray'
            />

            <MedicalRecord
              pages={10}
              icon='GrFedora'
              date='January 10'
              institution='Atkinson Clinic'
              title='Physical Exam'
              statistics={[
                { count: 2, label: 'NOTIFICATIONS', trajectory: 'up' },
              ]}
            />

          </div>

        </div>

      </div>

    </section>
  )
}
