import React from 'react'
import Header from './header'
import Footer from './footer'
import Loading from './loading'

const AppContainer = ({
    data,
    isFetching,
    candidateType,
    handleMenu,
    children
  }) => {
  return (
    <div className='app'>
      <Header candidateType={candidateType} handleMenu={handleMenu} />
      <main className='main'>
        {isFetching && <Loading />}
        {!isFetching && children && React.cloneElement(children, {
          className : handleMenu,
          data : data,
          candidateType : candidateType
        })}
      </main>
      <Footer />
    </div>
  )
}

export default AppContainer
