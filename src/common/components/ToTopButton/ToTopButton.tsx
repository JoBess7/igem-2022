import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Images from '../../Images'
import './ToTopButton.css'

function ToTopButton () {
  const getPageHeight = () => {
    const body = document.body
    const html = document.documentElement
    const height = Math.max(
      body.getBoundingClientRect().height,
      html.getBoundingClientRect().height
    )
    return height
  }

  const pageHeight = useRef(getPageHeight())
  const [isVisible, setIsVisible] = useState(false)

  const location = useLocation()

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    const yPos = window.pageYOffset

    if (yPos > pageHeight.current / 2) {
      setIsVisible(true)
    } else if (yPos <= pageHeight.current / 2) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    pageHeight.current = getPageHeight()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  return (
    <img
      onClick={() => scrollBackToTop()}
      className={`to-top-button ${isVisible ? 'to-top-button-visible' : ''}`}
      srcSet={Images.BlueArrowUp}
      alt=''
    />
  )
}

export default ToTopButton
