import styles from '../styles/HomePage.module.css'

import { UnicornLogo, FeatureProductsCarousel } from '../components/home'
import { SearchBar, ProductCard } from '../components'

import { Typography } from '@telus-uds/ds-allium'

import { sampleUnicorns } from '../constants'

function HomePage({ states }) {
  const { imageIndex, setImageIndex, pageActive, setpageActive } = states

  return (
    <div className="Home">
      <UnicornLogo />
      <SearchBar />

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
    </div>
  )
}

export default HomePage
