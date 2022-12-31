import Title from '../../../../common/components/Title/Title'
import './PartTitle.css'

interface IProps {
  part: string
  name: string
}

function PartTitle (props: IProps) {
  return (
    <div className='parts-title'>
      <Title title={'Part ' + props.part} />
      <span>{props.name}</span>
    </div>
  )
}

export default PartTitle
