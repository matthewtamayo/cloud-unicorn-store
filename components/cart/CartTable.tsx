import { Table, Typography, PriceLockup } from '@telus-uds/ds-allium'
import CartTableRow from './CartTableRow'
import { sampleCartItems } from '../../constants'
import styles from '../../styles/CartPage.module.css'

export default function CartTable() {
  const tableRows = sampleCartItems.map((item) => {
    return <CartTableRow key={item.unicorn.name} quantity={item.quantity} unicorn={item.unicorn} />
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

      <div className={styles.totalPriceWrapper}>
        <Typography variant={{ size: 'h3' }}>Cost: {'  '}</Typography>

        {/* pricelookup wants string to be price */}
        <PriceLockup price={totalPrice.toString()} />
      </div>
    </div>
  )
}
