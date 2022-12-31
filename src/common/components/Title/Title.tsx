import './Title.css'

interface IProps {
  title: string
  isSub?: boolean
  isMid?: boolean
  id?: string
  revert?: boolean
}

function Title (props: IProps) {
  return (
    <div
      id={props.id}
      className={`${props.isSub ? 'title-sub' : 'title-main'} ${
        props.revert ? 'title-revert' : ''
      } ${props.isMid ? 'title-mid' : ''}`}
    >
      {props.title}
    </div>
  )
}

export default Title
