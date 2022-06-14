import { useState } from 'react'

import HomePage from './home-page'

export default function Main() {

  const [imageIndex, setImageIndex] = useState(0)
  const [pageActive, setpageActive] = useState([true, false, false, false])
  const [showDistanceAndCost, setShowDistanceAndCost] = useState(false)

  const states = {
    imageIndex,
    setImageIndex,
    pageActive,
    setpageActive,
    showDistanceAndCost,
    setShowDistanceAndCost
  }
  return (
    <div>
      <HomePage states={states} />

      
    </div>
  )
}
