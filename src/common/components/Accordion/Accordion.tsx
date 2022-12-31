import React, { useState } from 'react'
import Images from '../../Images'
import './Accordion.css'

interface IProps {
  title: string
  children: React.ReactNode
  lightTheme?: boolean
}

function Accordion (props: IProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`accordion ${isExpanded ? 'accordion-expanded' : ''} ${
        props.lightTheme ? 'accordion-light' : ''
      }`}
    >
      <div className='accordion-title'>
        <span>{props.title}</span>
        <img srcSet={Images.HeaderArrowDown} alt='' />
      </div>
      <div className='accordion-children'>{props.children}</div>
    </div>
  )
}

export default Accordion
