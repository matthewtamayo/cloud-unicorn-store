import { SubNavigation } from '@telus-uds/ds-allium'
import styles from '../styles/HomePage.module.css'

export default function Navigation() {
  return (
    <div className={styles.navigationWrapper}>
      <SubNavigation
        items={[
          {
            id: 'one',
            label: 'Home',
            href: '/home-page'
          },
          {
            id: 'two',
            label: 'About',
            href: '/about'
          },
          {
            id: 'three',
            label: 'Products',
            href: '/product-page'
          }
        ]}
        pageId="one"
      />
    </div>
  )
}
