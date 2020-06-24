import './_styles.scss'
import React from 'react'
import Confetti from '../../images/confetti.svg';

export default function Checkup() {

  const dataset = ['Dr. Melendez', 'Dr. Shawn', 'Dr. Marcus'];

  return (
    <div className="next-checkup">
      <div className="title">Next check-up</div>
      <div className="content">

        <div className="doctors noselect">
          {dataset.map((a) =>
            <div className="doctor image" key={a} title={a} index={index(dataset, a)} />
          )
          }
        </div>

        <div className="caption">
          <span>You need to visit <br /></span>
          <b>{`${dataset.length} doctors`}</b>
          <span> next month</span>
        </div>

      </div>
      <img src={Confetti} alt="confetti" className="confetti" />
    </div>
  )
}

const index = (entity = [], index = 0) => (index + 1 / (entity.length));
