import * as ST from './styled'
import DialogImg from './dialog-img.jpg'
import Row from '../../../components/Row'

const DialogItem = () => {
  return (
    <ST.DialogItem>
      <ST.DialogImg
        src={DialogImg}
        alt="dialog-img"
        rounded
      />
      <ST.DialogContent>
        <Row>
          <ST.DialogName>Dmitriy Vorozheykin</ST.DialogName>
          <ST.DialogDate>Jun 9</ST.DialogDate>
        </Row>
        <ST.DialogText>Wall Post</ST.DialogText>
      </ST.DialogContent>
    </ST.DialogItem>
  )
}

export default DialogItem
