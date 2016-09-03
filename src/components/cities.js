import React from 'react'
import dataCities from './data-cities'
import { Link } from 'react-router'

const Cities = (props) => {
  return(
      <div className='select-city'>
        <h1 className='select-city_title'>Selecione sua cidade</h1>
        <ul className='select-city_list'>
        {dataCities.map(function(item, index){
          return <li key={index}><Link to={item.slug}> {item.name}</Link></li>
        })}
        </ul>
      </div>
    )
}

export default Cities
