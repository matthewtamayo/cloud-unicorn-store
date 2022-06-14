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
            href: '#topOfPage'
          },
          {
            id: 'two',
            label: 'About',
            href: '/about'
          },
          {
            id: 'three',
            label: 'Products',
            href: '#feature-product'
          }
        ]}
        pageId="one"
      />
    </div>
  )
}
