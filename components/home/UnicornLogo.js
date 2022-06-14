import { Image, Typography, Box } from '@telus-uds/ds-allium'
import unicornLogo from '../../public/images/EngineeringProductivityIcon.png'
import styles from '../../styles/HomePage.module.css'

export default function UnicornLogo() {
  return (
    <div className={styles.homeUniornLogoWrapper}>
      <Image src={unicornLogo} width={200} height={200} alt="Unicorn Logo" />

      <Box top={4}>
        <Typography align="center" variant={{ size: 'h2' }}>
          Engineering Productivity
        </Typography>
        <Typography align="right">Unicorn Store</Typography>
      </Box>
    </div>
  )
}
