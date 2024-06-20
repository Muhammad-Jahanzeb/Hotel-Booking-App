import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import List from '../../Components/List/List'
import PropertyType from '../../Components/PropertyType/PropertyType'
import GuestLove from '../../Components/GuestLove/GuestLove'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header type=""/>
      <List/>
      <PropertyType/>
      <GuestLove/>
    </>
  )
}

export default Home