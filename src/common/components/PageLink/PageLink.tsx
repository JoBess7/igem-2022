import './PageLink.css'
import React from 'react'

interface IProps {
  children: React.ReactNode
  src: string
}

function PageLink (props: IProps) {
  return (
    <a className='page-link' href={props.src}>
      {props.children}
      <span></span>
    </a>
  )
}

export default PageLink
