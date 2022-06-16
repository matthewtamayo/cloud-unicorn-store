import styles from '../styles/ShippingPage.module.css'
import { useState } from 'react'
import { Typography, Box, Select, Button, PriceLockup, Spacer, ButtonLink } from '@telus-uds/ds-allium'
import { UnicornLogo } from '../components'

function Shipping() {
  const [showDistanceAndCost, setShowDistanceAndCost] = useState(false)

  const calculateShippingCost = () => {
    // logic for calculating
    setShowDistanceAndCost(true)
  }

  return (
    <>
      <UnicornLogo />
      <div className={styles.shippingInformationWrapper}>
        <Typography variant={{ size: 'h1' }}>Shipping Information</Typography>

        <Box top={9}>
          <Select label="Select Country" hintPosition="below" tooltip="Select the country to ship contents to">
            <Select.Item value="root-item-1">Canada</Select.Item>
            <Select.Item value="root-item-2">Root item 2</Select.Item>
            <Select.Item value="root-item-3">Root item 3</Select.Item>
          </Select>
        </Box>

        <Box top={5}>
          <Select label="Enter Location" hintPosition="below" tooltip="Select the location to ship contents to">
            <Select.Item value="root-item-1">Toronto</Select.Item>
            <Select.Item value="root-item-2">Root item 2</Select.Item>
            <Select.Item value="root-item-3">Root item 3</Select.Item>
          </Select>
        </Box>

        <Box top={9}>
          <Button onPress={calculateShippingCost} tokens={{ borderRadius: 'none', backgroundColor: '#A52422', color: 'white', borderColor: '#A52422' }} variant={{ size: 'small' }}>
            Calculate Shipping
          </Button>
        </Box>

        {showDistanceAndCost && (
          <div className={styles.distanceCostWrapper}>
            <Typography variant={{ size: 'h3' }}>Distance: 1000 KM</Typography>
            <Spacer top={10} />
            <div className={styles.shippingCostWrapper}>
              <Typography variant={{ size: 'h3' }}>Cost:</Typography>

              <PriceLockup price="1000" />
            </div>

            <div className={styles.confirmShippingWrapper}>
              <ButtonLink href="/payment-page" tokens={{ borderRadius: 'none', backgroundColor: '#A2FAA3', color: '#131515', borderColor: '#A2FAA3' }} variant={{ size: 'small' }}>
                Confirm
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Shipping
