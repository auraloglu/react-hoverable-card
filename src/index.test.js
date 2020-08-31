import { HoverableCard } from '.'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { getByTestId } from '@testing-library/jest-dom/matchers'

configure({ adapter: new Adapter() })

describe('HoverableCard', () => {
  it('is truthy', () => {
    expect(HoverableCard).toBeTruthy()
  })
  it('render items correctly', () => {
    const wrapper = shallow(
      <HoverableCard
        cardTitle='Lorem Ipsum'
        cardDescription='Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor.'
        cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        hoverBgColor='grey'
      />
    )
    const titleData = 'Lorem Ipsum'
    const descriptionData =
      'Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor.'
    const imgUrlData =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    const title = wrapper.find('.cardTitle').text()
    const description = wrapper.find('.cardDescriptionHover').text()
    const image = wrapper.find('.cardImage').prop('src')
    expect(title).toEqual(titleData)
    expect(description).toEqual(descriptionData)
    expect(image).toEqual(imgUrlData)
  })
  it('sets css background color when hovered', () => {
    const wrapper = shallow(
      <HoverableCard
        cardTitle='Lorem Ipsum'
        cardDescription='Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor.'
        cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        hoverBgColor='grey'
      />
    )

    wrapper.simulate('mouseenter')
    const bgColor = wrapper.find('.card').get(0).props.style.backgroundColor
    expect(bgColor).toEqual('grey')
  })
  it('sets background image when hovered', () => {
    const wrapper = shallow(
      <HoverableCard
        cardTitle='Lorem Ipsum'
        cardDescription='Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor.'
        cardImage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        hoverBgColor='grey'
      />
    )

    wrapper.simulate('mouseenter')
    const bgImage = wrapper.find('.cardBackgroundImage').prop('src')
    const imgUrlData =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    expect(bgImage).toEqual(imgUrlData)
  })
})
