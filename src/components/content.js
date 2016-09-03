import React from 'react'
import Candidate from './candidate'
import _ from 'lodash'

const Content = ({ data, className, city, dataCities, candidateType }) => {
  let cityFull = _.filter(dataCities, {slug: city || ''})[0]
  cityFull = (cityFull) ? cityFull.name : ''
  return (
    <section className={`section-candidates section-candidates--${candidateType}`}>
      <h1>Candidatos a <strong>{(candidateType === 'prefeitos') ? 'Prefeitos' : 'Vereadores'} de {cityFull}</strong></h1>
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
