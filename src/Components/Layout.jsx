import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from '../router/Router'


function Layout() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'65px'}}>
      <Router/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
