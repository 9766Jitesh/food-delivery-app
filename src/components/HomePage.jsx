import React from 'react'
import CategoryComponent from './CategoryComponent'
import FoodComponent from './FoodComponent'
import HeadLineCompCard from './HeadLineCompCard'
import HeroComponent from './HeroComponent'
import NavbarComponent from './NavbarComponent'

export default function HomePage() {
  return (
    <div>
        <NavbarComponent/>
        <HeroComponent/>
        <HeadLineCompCard/>
        <FoodComponent />
        <CategoryComponent/>

      
    </div>
  )
}
