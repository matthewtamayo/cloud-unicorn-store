import styles from '../styles/HomePage.module.css'
import { useState } from 'react'
import { FeatureProductsCarousel } from '../components/home/index'
import { SearchBar, ProductCard, FloatingCart, UnicornLogo } from '../components/index'
import { Typography } from '@telus-uds/ds-allium'
import { sampleUnicorns } from '../constants'

function HomePage() {
  const [imageIndex, setImageIndex] = useState(0)
  const [pageActive, setpageActive] = useState([true, false, false, false])

  return (
    <>
      <UnicornLogo />
      <SearchBar />

      <FloatingCart />

      <div className={styles.featuredProductsTextWrapper}>
        <Typography variant={{ size: 'display2' }} heading="h2">
          Featured Products
        </Typography>
      </div>

      <div className={styles.homeFeatureProductWrapper}>
        <div style={{ maxWidth: '20rem', margin: '0 auto' }}>
          <ProductCard unicorn={sampleUnicorns[imageIndex]} />
        </div>
      </div>

      <FeatureProductsCarousel setImageIndex={setImageIndex} pageActive={pageActive} setpageActive={setpageActive} />
    </>
  )
}

export default HomePage
