import React from 'react'
import CategoryBar from './category-bar/CategoryBar'
import HeroSection from './hero-section/HeroSection'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import ProductWithMedia from './product-with-media/ProductWithMedia'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'

const Home = () => {
  return (
    <Box className="!bg-slate-100">
      <CategoryBar/>
      <HeroSection/>
      <EarbudGallery/>
      <ProductWithMedia/>
      <BestSellers/>
    </Box>
  )
}

export default Home