import React from 'react'
import Images from '../../Images'
import './TableOfContent.css'

export interface Child {
  displayName: string
  id: string
}

export interface Parent {
  displayName: string
  id: string
  children: Child[]
}

interface IProps {
  content: Parent[]
}

const getOffset = (el: any) => {
  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}

const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  const yPos = getOffset(element).top - 220

  window.scrollTo({
    top: yPos ? yPos + 100 : yPos,
    behavior: 'smooth'
  })
}

function TableOfContent (props: IProps) {
  return (
    <div className='table-of-content'>
      <span>Table of contents</span>
      {props.content.map((parent, index) => (
        <div className='toc-parent' key={index}>
          <span className='toc-parent-title' onClick={() => scrollToElement(parent.id)}>
            {parent.displayName}
          </span>
          <div className='toc-children'>
            {parent.children.map((child, index) => (
              <div key={index} className='toc-child'>
                <img srcSet={Images.DarkArrowRight} alt='' />
                <span className='toc-child-title' onClick={() => scrollToElement(child.id)}>
                  {child.displayName}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TableOfContent
