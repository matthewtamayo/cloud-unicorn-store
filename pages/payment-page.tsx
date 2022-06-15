import { Typography, ButtonLink } from '@telus-uds/ds-allium'
import styles from '../styles/PaymentPage.module.css'
import { PaymentTable } from '../components/payment'

export default function PaymentPage() {
  return (
    <div>
      <div className={styles.paymentTitleWrapper}>
        <Typography variant={{ size: 'h1' }}>Payment</Typography>
      </div>

      <div className={styles.reviewOrderWrapper}>
        <Typography variant={{ size: 'h3' }}>Review Order</Typography>
      </div>

      <PaymentTable />

      <div className={styles.payNowWrapper}>
        <ButtonLink variant={{ size: 'small' }}>Pay Now</ButtonLink>
      </div>

      {/* for some reason modal doesn't pop up right away, will use another page for order complete instead */}
    </div>
  )
}
