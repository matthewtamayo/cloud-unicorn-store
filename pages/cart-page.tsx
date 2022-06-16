import { CartTable } from '../components/cart'
import { Typography, ButtonLink } from '@telus-uds/ds-allium'
import styles from '../styles/CartPage.module.css'
import { UnicornLogo } from '../components'

export default function CartPage() {
  return (
    <>
      <UnicornLogo />
      <div className={styles.cartTitleWrapper}>
        <Typography variant={{ size: 'h1' }}>Cart</Typography>
      </div>
      <CartTable />
      <div className={styles.toShippingWraper}>
        <ButtonLink href='/shipping-page' variant={{ size: 'small' }}>Go To Shipping</ButtonLink>
      </div>
    </>
  )
}
