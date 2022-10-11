import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <App width={window.innerWidth} height={window.innerHeight} />,
    <App />,
    document.getElementById('app')
  )
})
