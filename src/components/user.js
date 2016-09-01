import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  let data = props.dataCandidate
  console.log(data)
  return (
    <div>
      <Link className='btn' to={`/${props.params.city}/${props.params.type}/`}>« Voltar</Link>
      <header className={`candidate-user ${props.params.type}`}>
        <img
          alt={data.nomeCompleto}
          src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${props.candidateId}?x=1471489200000`}
        />
        <h1>{data.nomeCompleto}</h1>
        <p>{data.composicaoColigacao}</p>
        <p>{`${data.partido.sigla} - ${data.partido.nome}`}</p>
        <p>{data.numero}</p>
      </header>
      <p>Grau de instrução: {data.grauInstrucao}</p>
      <p>CPF: {data.cpf}</p>
      <p>Naturalidade: {data.descricaoNaturalidade}</p>
      <p>Contato:
        {data.emails.map((item, index) => {
          return <a key={index} href={`maitl${item}`} target='_blank'>{item}<br/></a>
        })}
      </p>
      <h2>Eleições anterioes</h2>
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
      {!!data.vices.length && <Vice data={data.vices[0]} />}
    </div>
  )
}

const Vice = (props) => {
  props = props.data
  return (
      <div>
        <hr />
        <h2>Vice</h2>
        <img src={props.urlFoto} />
        <h3>{props.nm_CANDIDATO}</h3>
        <h3>{props.nm_PARTIDO}</h3>
        <p>{`${props.sg_PARTIDO} - ${props.nm_PARTIDO}`}</p>
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

export default User
