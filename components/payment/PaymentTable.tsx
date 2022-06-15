import { Table, Typography, PriceLockup } from '@telus-uds/ds-allium'
import PaymentTableRow from './PaymentTableRow'
import { sampleCartItems } from '../../constants'
import styles from '../../styles/PaymentPage.module.css'

export default function PaymentTable() {
  const tableRows = sampleCartItems.map((item) => {
    return <PaymentTableRow key={item.unicorn.name} quantity={item.quantity} unicorn={item.unicorn} />
  })

  const totalPrice = sampleCartItems.reduce((total, item) => {
    return total + parseInt(item.unicorn.price.substring(1)) * item.quantity
  }, 0)

  return (
    <div className={styles.tableWrapper}>
      <Table>
        <Table.Header>
          <Table.Cell>Quantity</Table.Cell>
          <Table.Cell>Unicorn</Table.Cell>
          <Table.Cell>Sub-Total</Table.Cell>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>

      <div className={styles.shippingCostWrapper}>
        <Typography variant={{ size: 'h2' }}>Shipping cost to Toronto, Canada: $1000</Typography>
      </div>

      <div className={styles.totalPriceWrapper}>
        <Typography variant={{ size: 'h3' }}>Cost: {'  '}</Typography>

        {/* pricelookup wants string to be price */}
        <PriceLockup price={(totalPrice + 1000).toString()} />
      </div>
    </div>
  )
}
