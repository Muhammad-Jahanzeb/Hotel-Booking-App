import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import List from '../../Components/List/List'
import PropertyType from '../../Components/PropertyType/PropertyType'
import GuestLove from '../../Components/GuestLove/GuestLove'
import EmailList from '../../Components/EmailList/EmailList'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header type=""/>
      <List/>
      <PropertyType/>
      <GuestLove/>
      <EmailList/>
      <Footer/>
    </>
  )
}

export default Home