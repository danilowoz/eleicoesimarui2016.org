import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import _ from 'lodash'
import dataCities from './data-cities'
import Loading from './loading'


const CandidateInterface = (props) => {
  let self = props.dataCandidate
  return (
    <div>
      <Link className='btn' to={`/${props.originalProps.city}/${props.originalProps.candidateType}/`}>« Voltar</Link>
      <img
        alt={self.nomeCompleto}
        className='candidate-item__avatar-item'
        src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${self.id}?x=1471489200000`}
      />
      {self.nomeCompleto}
    </div>
    )
}


class User extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isFetchingMore: true,
      dataCandidate: []
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    let cityCode = _.filter(dataCities, {slug: this.props.city})[0].id
    let candidateId = this.props.candidateId

    axios.get(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2016/${cityCode}/2/candidato/${candidateId}`)
    .then(response => {
      this.setState({
        dataCandidate: response.data
      }, () => {
        this.setState({
          isFetchingMore: false
        })
      })
    })
    .catch(error => {
    })
  }

  render() {
    return (

      <div>
        {this.state.isFetchingMore && <Loading />}
        {!this.state.isFetchingMore && <CandidateInterface originalProps={this.props} data={this.state.dataCandidate} />}
      </div>
      )
  }

}


export default User
