import { Pagination } from '@telus-uds/ds-allium'
import styles from '../../styles/HomePage.module.css'

export default function FeatureProductsCarousel({ setImageIndex, setpageActive, pageActive }: any) {
  return (
    <div className={styles.paginationWrapper}>
      <Pagination>
        <Pagination.PageButton
          onPress={() => {
            setImageIndex(0)
            setpageActive([true, false, false, false])
          }}
          isActive={pageActive[0]}
        />
        <Pagination.PageButton
          onPress={() => {
            setImageIndex(1)
            setpageActive([false, true, false, false])
          }}
          isActive={pageActive[1]}
        />
        <Pagination.PageButton
          onPress={() => {
            setImageIndex(2)
            setpageActive([false, false, true, false])
          }}
          isActive={pageActive[2]}
        />
        <Pagination.PageButton
          onPress={() => {
            setImageIndex(3)
            setpageActive([false, false, false, true])
          }}
          isActive={pageActive[3]}
        />
      </Pagination>
    </div>
  )
}
