import React from 'react'

import { HoverableCard } from 'react-hoverable-card'
import 'react-hoverable-card/dist/index.css'

const App = () => {
  return (
    <div style={{width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <HoverableCard cardTitle="Lorem Ipsum"
        cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
        cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        hoverBgColor="grey"
      />
    </div>
  )
}

export default App
