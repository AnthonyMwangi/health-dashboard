import './_styles.scss'
import React from 'react'

export default function Switch() {
  return (
    <div className='toggle-switch'>
      <input type="checkbox" id="switch" />
      <label for="switch"/>
    </div>
  )
}
