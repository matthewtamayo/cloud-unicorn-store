import { Typography, FlexGrid } from '@telus-uds/ds-allium'
import styles from '../styles/ProductPage.module.css'
import { SearchBar, ProductCard, FloatingCart } from '../components/index'
import { sampleUnicorns } from '../constants/index'

export default function ProductPage() {
  const products = sampleUnicorns.map((unicorn) => {
    return (
      <FlexGrid.Col key={unicorn.name} xs={12} md={4}>
        <div className={styles.productCardWrapper}>
          <ProductCard key={unicorn.name} unicorn={unicorn} />
        </div>
      </FlexGrid.Col>
    )
  })

  return (
    <div>
      <FloatingCart />

      <div className={styles.productPageWrapper}>
        <Typography variant={{ size: 'h1' }}>Products</Typography>

        <SearchBar />

        <div className={styles.productFlexGridWrapper}>
          <FlexGrid>
            <FlexGrid.Row>{products}</FlexGrid.Row>
          </FlexGrid>
        </div>
      </div>
    </div>
  )
}
