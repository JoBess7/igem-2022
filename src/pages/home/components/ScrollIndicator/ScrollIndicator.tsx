import Images from '../../../../common/Images'
import './ScrollIndicator.css'

interface IProps {
  index: number
}

const indicators = 10

function ScrollIndicator (props: IProps) {
  return (
    <div className='scroll-indicator'>
      <div className='scroll-indicator-arrow'>
        <img srcSet={Images.ScrollIndicatorArrowUp} alt='' />
      </div>
      <div className='scroll-indicator-dots'>
        {Array.from(Array(indicators).keys()).map((_, index) => {
          return (
            <div
              key={index}
              className={props.index === index ? 'si-d scroll-indicator-shown' : 'si-d'}
            />
          )
        })}
      </div>
      <div className='scroll-indicator-arrow'>
        <img srcSet={Images.ScrollIndicatorArrowDown} alt='' />
      </div>
    </div>
  )
}

export default ScrollIndicator
