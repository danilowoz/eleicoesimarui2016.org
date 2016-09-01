import React from 'react'
import Header from './header'
import Footer from './footer'
import Loading from './loading'

const AppContainer = ({
  data,
  isFetching,
  city,
  candidateType,
  candidateId,
  handleMenu,
  children
}) => {
  return (
    <div className='app'>
      <Header
        city={city}
        handleMenu={handleMenu}
      />
      <main className='main'>
        {isFetching && <Loading />}
        {!isFetching && children && React.cloneElement(children, {
          data : data,
          className : handleMenu,
          city: city,
          candidateType : candidateType,
          candidateId: candidateId
        })}
      </main>
      <Footer />
    </div>
  )
}

export default AppContainer
