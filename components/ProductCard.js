import { ResponsiveImage, Typography, Box, Button, Card, Spacer } from '@telus-uds/ds-allium'
import styles from '../styles/HomePage.module.css'

export default function ProductCard({ unicorn }) {
  const { image, name, description } = unicorn

  return (
    <Card>
      <Typography align={'center'} block variant={{ size: 'h1' }}>
        {name}
      </Typography>
      <Box>
        <Spacer space={4} />
        <ResponsiveImage fallbackSrc={image} xsSrc={image} smSrc={image} alt="Unicorn Logo" />
        <Spacer space={4} />
        <Box bottom={2}>
          <Typography align={'center'}>{description}</Typography>
        </Box>

        <div className={styles.featureAddToCartButtonWrapper}>
          <Box space={1}>
            <Button tokens={{ backgroundColor: '#A52422' }} variant={{ size: 'small', priority: 'high' }}>
              Add To Cart
            </Button>
          </Box>
        </div>
      </Box>
    </Card>
  )
}
