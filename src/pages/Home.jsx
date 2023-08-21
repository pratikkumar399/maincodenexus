import React from 'react'
import HomeCrousel from '../components/HomeCrousel'
import Brands from '../components/Brands'
import CoursesHome from '../components/CoursesHome'
import Placements from '../components/Placements'
import PlacedInput from '../components/PlacedInput'
import Intro from '../components/Intro'
import Carousel from '../components/Carousel'
import CardPage from './CardPage'
import Features from './Features'

function Home() {
  return (
    <div>
      <HomeCrousel />
      <Intro />
      <Brands />
      <CoursesHome />
      <CardPage />
      <Features />
      {/* <PlacedInput /> */}
      <Carousel />
      <Placements />
    </div>
  )
}

export default Home