import * as ST from './styled'
import DialogImg from './dialog-img.jpg'
import Row from '../../../components/Row'
import Column from '../../../components/Column'
import Image from '../../../components/Image'
const DialogItem = () => {
  return (
    <ST.Wrapper>
      <Row>
        <Column>
          <Image
            src={DialogImg}
            alt="dialog-img"
            rounded
          />
        </Column>
        <Column>
          <ST.Name>Dmitriy Vorozheykin</ST.Name>
          {/* <ST.Date>Jun 9</ST.Date> */}
          <ST.Text>Wall Post</ST.Text>
        </Column>

      </Row>
    </ST.Wrapper>
  )
}

export default DialogItem
