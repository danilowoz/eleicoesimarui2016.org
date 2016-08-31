import React from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazyload';

const Candidate = ({ city, candidate, candidateType }) => {
  // console.log(city)
  return (
    <li className={`candidate-item candidate-item--${candidateType.toLowerCase()}`}>
      <Link to={`/${city}/${candidateType}/${candidate.id}`}>
        <div className='candidate-item__avatar-wrapper'>
        <LazyLoad height={120}>
          <img
            alt={candidate.name}
            className='candidate-item__avatar-item'
            src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${candidate.id}?x=1471489200000`}
          />
        </LazyLoad>
        </div>
        <div className='candidate-item__number'>{candidate.numero}</div>
        <h2 className='candidate-item__name'>
          {candidate.nomeUrna}
        </h2>
        <p className='candidate-item__partido'>
          {candidate.partido.sigla} – {candidate.nomeColigacao}
        </p>
      </Link>
    </li>
  )
}

export default Candidate
