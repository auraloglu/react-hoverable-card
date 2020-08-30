import React, { useState } from 'react'
import styles from './styles.module.css'

export const HoverableCard = ({
  cardTitle,
  cardDescription,
  cardImage,
  hoverBgColor
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderBackground = () => {
    if (isHovered) {
      return (
        <div>
          <img src={cardImage} className={styles.cardBackgroundImage} />
        </div>
      )
    }
    return null
  }

  const onMouseEnter = () => {
    setIsHovered(true)
  }

  const onMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={styles.card}
      style={isHovered ? { backgroundColor: hoverBgColor || 'grey' } : {}}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      {renderBackground()}
      <div>
        <img className={styles.cardImage} src={cardImage} />
        <span className={styles.cardDescriptionHover}>{cardDescription}</span>
      </div>
      <div className={styles.cardTitle}>{cardTitle}</div>
    </div>
  )
}
