import React from 'react'
import Candidate from './candidate'

const Content = ({ data, className, city, candidateType }) => {
  return (
    <section className={`section-candidates section-candidates--${candidateType}`}>
      <h1>{(candidateType === 'prefeitos') ? 'Prefeitos' : 'Vereadores'}</h1>
      <div className='section-wrapper'>
        <ul className='candidates-list'>
          {data.map((item) => {
            return <Candidate key={item.id} city={city} candidate={item} candidateType={candidateType} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Content
