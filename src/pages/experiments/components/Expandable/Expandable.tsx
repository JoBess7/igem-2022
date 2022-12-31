import { useState } from 'react'
import Images from '../../../../common/Images'
import './Expandable.css'
import { BiLinkExternal } from 'react-icons/bi'

interface IProps {
  title: string
  link: string
}

function Expandable (props: IProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`expandable ${isExpanded ? 'expanded' : ''}`}>
      <div className='expandable-title' onClick={() => setIsExpanded(!isExpanded)}>
        <span>{props.title}</span>
        <img srcSet={Images.HeaderArrowDown} alt='' />
      </div>
      <div className='expandable-frame'>
        <a href={props.link}>
          <BiLinkExternal size={30} color='#031d38' />
        </a>
        <embed src={props.link} type='application/pdf'></embed>
      </div>
    </div>
  )
}

export default Expandable
