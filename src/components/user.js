import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

const User = (props) => {
  let candidateId = Number(props.params.id)
  let candidateType = props.params.type
  let candidate = _.filter(props.data, {id: candidateId})[0]
  return (
    <div>
      <Link className='btn' to={`/${props.params.type}`}>« Voltar</Link>
      <div className={`candidate-item candidate-item_full candidate-item--${candidateType}`}>
        <div className='candidate-item__avatar-full'>
          <img
            alt={candidate.nomeUrna}
            className='candidate-item__avatar-item'
            src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${candidateId}?x=1471489200000`}
          />
        </div>
        <div className='candidate-item__number'>{candidate.numero}</div>
        <h2 className='candidate-item__name'>
          {candidate.nomeUrna}
        </h2>
        <p className='candidate-item__partido'>
          {candidate.partido.sigla} – {candidate.nomeColigacao}
        </p>
      </div>
    </div>
  )
}

export default User
