import { Button, Icon } from '@telus-uds/ds-allium'
import { CartEmptyBold } from '@telus-uds/palette-allium/build/web/icons'

import styles from '../styles/HomePage.module.css'

export default function FloatingCart() {
  return (
    <div className={styles.floatingCartIcon}>
      <Button tokens={{ borderColor: 'black', borderRadius: 'none', outerBorderColor: 'white', width: '4rem' }} onPress={() => {}} variant={{ size: 'small' }}>
        <Icon icon={CartEmptyBold} />
      </Button>
    </div>
  )
}
