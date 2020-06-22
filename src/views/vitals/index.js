import './_styles.scss'
import React from 'react'

import { IoMdPulse as Pulse } from 'react-icons/io'
import { MdFavorite as Heart } from 'react-icons/md'
import { FaThermometerHalf as Thermometer } from 'react-icons/fa'

export default function Vitals() {
  return (
    <div className="card dark vitals">

      <div className="wrapper">
        <div className="card-title">You're doing great</div>
        <div className="card-caption">Main life metrics are normal</div>
      </div>

      <div className="vitals-wrapper">

        <VitalReading
          Icon={Heart}
          value='115/68'
          label='BLOOD PRESSURE'
        />

        <VitalReading
          Icon={Pulse}
          value='74'
          label='PULSE'
        />

        <VitalReading
          Icon={Thermometer}
          value='36.6'
          label='TEMPERATURE'
        />

      </div>



    </div>
  )
}

const VitalReading = ({ Icon, value = '', label = '' }) => {
  return (
    <div className="vital-reading">

      <div className="icon">
        <Icon />
      </div>

      <div className="content">
        <div className="vital-value">{value}</div>
        <div className="vital-label">{label}</div>
      </div>

    </div>
  )
}
