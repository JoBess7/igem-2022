import './References.css'

interface IProps {
  references: string[]
}

function References (props: IProps) {
  return (
    <div className='references'>
      <span id='references-top'>References</span> <br /> <br />
      {props.references.map((ref, index) => (
        <div key={ref} className='ref'>
          <span>{index + 1 + '. ' + ref}</span> <br /> <br />
        </div>
      ))}
    </div>
  )
}

export default References
