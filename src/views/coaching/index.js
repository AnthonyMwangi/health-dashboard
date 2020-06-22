import './_styles.scss'
import React from 'react'
import { Switch } from '../../components'

export default function Coaching() {
  return (
    <div className="card dark coaching">

      <div className="card-heading">
        <div className="avatar image" title='Coach Carter' />
        <Switch />
      </div>

      <div className="card-content">
        <div className="card-title">Coaching goal</div>
        <div className="card-caption">
          Walk atleast 15 min in a row everyday at a brisk pace
        </div>
      </div>

      <div className='card-goal'>
        <div className="value">15</div>
        <div className="metric">minute<br />walk</div>
      </div>

    </div>
  )
}
