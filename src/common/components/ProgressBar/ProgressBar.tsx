import styled from 'styled-components'

interface IProps {
  scroll: string
}

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(to right, #c2eded ${(props: IProps) => props.scroll}, transparent 0);
  width: 100%;
  height: 4px;
  z-index: 3;
`

export default Progress
