import React from 'react'
import Navbar from '../SharedComponents/Navbar/Navbar'
import Container from '../SharedComponents/CenterContainer/Container'
import Jobs from '../SharedComponents/CardsJobs/Jobs'
 const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Container></Container>
    <Jobs></Jobs>
    </div>
  )
}
export default Home;