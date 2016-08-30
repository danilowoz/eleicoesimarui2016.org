import React from 'react'
import { Link } from 'react-router'

const Candidate = ({ candidate, candidateType }) => {
  return (
    <li className={`candidate-item candidate-item--${candidateType.toLowerCase()}`}>
      <Link to={`${candidateType}/${candidate.id}`}>
        <div className='candidate-item__avatar-wrapper'>
          <img
            alt={candidate.name}
            className='candidate-item__avatar-item'
            src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${candidate.id}?x=1471489200000`}
          />
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
