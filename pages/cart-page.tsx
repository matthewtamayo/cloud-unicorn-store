import { CartTable } from '../components/cart'
import { Typography } from '@telus-uds/ds-allium'
import styles from '../styles/CartPage.module.css'

export default function CartPage() {
  return (
    <div>
      <div className={styles.cartTitleWrapper}>
        <Typography variant={{ size: 'h1' }}>Cart</Typography>
      </div>
      <CartTable />
    </div>
  )
}
