# react-hoverable-card

> React card component with cool hover animation

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2ec1a4ed95d74a02a16d59f00cea8e7c)](https://www.codacy.com/manual/cappydh/react-hoverable-card?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cappydh/react-hoverable-card&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/cappydh/react-hoverable-card.svg?branch=master)](https://travis-ci.org/cappydh/react-hoverable-card)
[![NPM](https://img.shields.io/npm/v/react-hoverable-card.svg)](https://www.npmjs.com/package/react-hoverable-card)
[![Coverage Status](https://coveralls.io/repos/github/cappydh/react-hoverable-card/badge.svg?branch=master)](https://coveralls.io/github/cappydh/react-hoverable-card?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dt/react-hoverable-card.svg)](https://npmcharts.com/compare/react-hoverable-card?interval=1)

## Example

![Example](example/2020-08-27_20-47-06.gif)

## Install

```bash
npm install --save react-hoverable-card
```

## Usage

```jsx
import React from 'react'

import { HoverableCard } from 'react-hoverable-card'
import 'react-hoverable-card/dist/index.css'

const App = () => {
  return (
    <HoverableCard
      cardTitle="Lorem Ipsum"
      cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
      cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      hoverBgColor="grey"
    />
  )
}

export default App

```

## Contributors

<a href="https://github.com/mertbaser">
  <img src="https://github.com/mertbaser.png?size=50">
</a>

## License

MIT © [cappydh](https://github.com/cappydh)
