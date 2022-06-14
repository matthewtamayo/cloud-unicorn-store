import { Search } from '@telus-uds/ds-allium'
import styles from '../styles/HomePage.module.css'

export default function SearchBar() {
    return (
      <div className={styles.searchWrapper}>
        <Search />
      </div>
    )
  }
  