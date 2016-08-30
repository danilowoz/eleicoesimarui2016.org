import React from 'react'
import Candidate from './candidate'

const Content = ({ className, data, candidateType }) => {
  return (
    <section className={`section-candidates section-candidates--${candidateType}`}>
      <div className='section-wrapper'>
        <ul className='candidates-list'>
          {data.map((item) => {
            return <Candidate key={item.id} candidate={item} candidateType={candidateType} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Content
