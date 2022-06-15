import { Typography, ButtonLink } from '@telus-uds/ds-allium'
import styles from '../styles/OrderCompletePage.module.css'

export default function OrderPage() {
  const orderNumber = 123

  return (
    <div>
      <div className={styles.thankYouWrapper}>
        <Typography variant={{ size: 'h1' }}>{'Order placed #' + orderNumber}</Typography>

        <Typography variant={{ size: 'h3' }}>Thank you for your order</Typography>
      </div>
      <div className={styles.linkWrapper}>
        <ButtonLink variant={{ size: 'small' }}>Back to setting high scores!</ButtonLink>
      </div>
    </div>
  )
}
