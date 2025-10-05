import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <section className='wrapper'>
      <Header title={props.pageTitle} />
      <main>
        <div className='container'>{props.children}</div>
      </main>
      
      <Footer />
    </section>
  )
}

export default Layout