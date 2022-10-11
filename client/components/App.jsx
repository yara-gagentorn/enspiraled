import React from 'react'

import Circle from './Circle'

function App() {
  let width = window.innerWidth
  let height = window.innerHeight
  const circle = {
    cx: width / 2,
    cy: height / 2,
    level: 0,
    r: 256,
  }

  return (
    <>
      <svg width={width - 100} height={height - 100}>
        <Circle circle={circle} />
      </svg>
    </>
  )
}

export default App
