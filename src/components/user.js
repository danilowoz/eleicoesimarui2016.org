import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  let data = props.dataCandidate
  let params = props.params
  return (
    <div>
      {(data.length !== 0) && <UserRender data={data} params={params} />}
    </div>
  )
}

const UserRender = (props) => {
  let data = props.data
  return (
    <div>
      <Link className='btn' to={`/${props.params.city}/${props.params.type}/`}>« Voltar</Link>
      <div className='user'>
        <header className={`user-header ${props.params.type}`}>
          <figure>
            <img
              alt={data.nomeUrna}
              src={data.fotoUrl}
            />
          </figure>
          <div className='user-header_data'>
            <h1>{data.nomeUrna}</h1>
            <h2>{`${data.partido.sigla} - ${data.partido.nome}`}</h2>
            <p className='number'>{data.numero}</p>
            <p className='colicacao'>Coligação: {data.composicaoColigacao}</p>
          </div>
        </header>
        <div className='user-extra-info'>
          <p><strong>CPF:</strong> {data.cpf}</p>
          <p><strong>Grau de instrução:</strong> {data.grauInstrucao}</p>
          <p><strong>Naturalidade:</strong> {data.descricaoNaturalidade}</p>
          <p><strong>Contato:</strong>
            {data.emails.map((item, index) => {
              return <a key={index} href={`maitl${item}`} target='_blank'>{item}<br/></a>
            })}
          </p>
          <p><strong>Total de bens:</strong> R$ {prettyPrice(data.totalDeBens)}</p>
          <h2 className='user-table_title'>Eleições anterioes</h2>
          <div className='user-table'>
            <table>
              <tbody>
              <tr>
                <th>Cargo</th>
                <th>Local</th>
                <th>Ano</th>
                <th>Partido</th>
                <th>Situação</th>
              </tr>
              {data.eleicoesAnteriores.map((item, index) => {
                if(item.cargo) {
                  return <Prevs key={index} data={item}/>
                }
              })}
              </tbody>
            </table>
          </div>
        </div>
        {!!data.vices.length && <Vice data={data.vices[0]} />}
      </div>
    </div>
  )
}

const Vice = (props) => {
  props = props.data
  return (
      <div className='user-vice'>
        <figure>
          <img src={props.urlFoto} />
        </figure>
        <div className='user-vide_data'>
          <h2><small>Vice-prefeito</small></h2>
          <h3>{props.nm_CANDIDATO}</h3>
          <p>{props.nm_PARTIDO}</p>
          <p>{`${props.sg_PARTIDO} - ${props.nm_PARTIDO}`}</p>
        </div>
      </div>
    )
}

const Prevs = (props) => {
  props = props.data
  return (
      <tr>
          <td>{props.cargo}</td>
          <td>{props.local}</td>
          <td>{props.nrAno}</td>
          <td>{props.partido}</td>
          <td>{props.situacaoTotalizacao}</td>
      </tr>
    )
}

const prettyPrice = (num) => {
  var n = 2,
      x = 3,
      s = '.',
      c = ','

  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';

  num = num.toFixed(Math.max(0, ~~n))

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))
}

export default User
