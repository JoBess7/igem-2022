import './TextRef.css'

interface IProps {
  content: string
  sup: string
}

function TextRef (props: IProps) {
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

  const navigateToReferences = () => {
    const element = document.getElementsByClassName('references')[0]
    const yPos = getOffset(element).top - 220

    window.scrollTo({
      top: yPos ? yPos + 100 : yPos,
      behavior: 'smooth'
    })
  }

  return (
    <span className='text-ref' onClick={() => navigateToReferences()}>
      {props.content}
      <sup>{props.sup}</sup>
    </span>
  )
}

export default TextRef
