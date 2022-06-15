import { Table, IconButton } from '@telus-uds/ds-allium'
import styles from '../../styles/CartPage.module.css'

export default function PaymentTableRow({ quantity, unicorn }) {
  const { name, price } = unicorn
  return (
    <Table.Row>
      <Table.Cell>
        <div className={styles.qtyCellWrapper}>
          <IconButton iconName="Subtract" variant={{ size: 'small' }} /> {' ' + quantity + ' '}
          <IconButton iconName="Add" variant={{ size: 'small' }} />
        </div>
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
    </Table.Row>
  )
}
