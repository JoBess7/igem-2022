import React from 'react'
import './ImageWithCaption.css'

interface IProps {
  caption?: string
  src: string
  figure?: number
  hasBackground?: boolean
  imagePadding: number
  captionPadding: number
  isTable?: boolean
  children?: React.ReactNode
}

function ImageWithCaption (props: IProps) {
  return (
    <div
      className='image-with-caption'
      style={{
        padding: `${props.imagePadding}px`
      }}
    >
      <img
        srcSet={props.src}
        className={`${props.hasBackground ? 'image-has-background' : ''}`}
        alt=''
      />
      <div className='image-caption' style={{ padding: `${props.captionPadding}px` }}>
        {props.figure && <span>Figure {props.figure}.</span>}
        {props.isTable && <span>Table 1.</span>}
        {props.caption}
        {props.children}
      </div>
    </div>
  )
}

export default ImageWithCaption
