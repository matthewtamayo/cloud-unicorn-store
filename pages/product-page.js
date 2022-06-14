import { Typography, StackView, FlexGrid } from '@telus-uds/ds-allium'
import styles from '../styles/ProductPage.module.css'

import { SearchBar, ProductCard } from '../components'
import { sampleUnicorns } from '../constants'

export default function ProductPage() {
  const products = sampleUnicorns.map((unicorn) => {
    return (
      <FlexGrid.Col xs={12} md={4}>
        <div className='product-card-wrapper'>
          <ProductCard unicorn={unicorn} />
        </div>
      </FlexGrid.Col>
    )
  })

  return (
    <div className="Product">
      <div id="product-page-wrapper">
        <Typography variant={{ size: 'h1' }}>Products</Typography>

        <SearchBar />

        <div id="products-stackview-wrapper">
          <FlexGrid>
            <FlexGrid.Row>{products}</FlexGrid.Row>
          </FlexGrid>
          {/* <StackView direction={{ xs: 'column', md: 'row' }} space={{ xs: 3, lg: 6 }}>
            {products}
          </StackView> */}
        </div>
      </div>
    </div>
  )
}