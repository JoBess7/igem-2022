import React from 'react'
import ToTopButton from '../ToTopButton/ToTopButton'
import './PageLayout.css'

interface IProps {
  children: React.ReactNode
  title: string
  description?: string
  id?: string
  isMaxed?: boolean
}

function PageLayout (props: IProps) {
  return (
    <div id={props.id} className={`page-layout ${props.isMaxed ? 'page-layout-maxed' : ''}`}>
      <ToTopButton />
      <div className='page-layout-title'>{props.title}</div>
      <div className='page-layout-description'>{props.description}</div>
      <div className={`page-layout-children ${props.isMaxed ? 'page-layout-maxed no-pad' : ''}`}>
        {props.children}
      </div>
    </div>
  )
}

export default PageLayout
