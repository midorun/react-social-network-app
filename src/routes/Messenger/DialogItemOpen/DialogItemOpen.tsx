import { FC } from 'react';
import * as ST from './styled'
import Column from '../../../components/Column';
import Row from '../../../components/Row';
import { DialogItemType } from '../../../types/types';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/Icons/ArrowLeft.svg'
import Image from '../../../components/Image'
import ChirkovaImage from '../../../assets/Img/dialog-img-chirkova.jpg'
interface DialogItemOpenProps {
  dialogItem: DialogItemType
}

const DialogItemOpen: FC<DialogItemOpenProps> = ({ dialogItem: { name } }) => {


  return (
    <ST.Wrapper>
      <ST.Header>
        <Row>
          <Column>
            <ST.Back to="/Messenger/">
              <ArrowLeftIcon />
              <ST.BackText>Back</ST.BackText>
            </ST.Back>
          </Column>

          <Column>
            <ST.TitleWrapper>
              <ST.Name>{name}</ST.Name>
            </ST.TitleWrapper>
          </Column>

          <Column>
            <ST.ImageWrapper>
              <Image src={ChirkovaImage} alt="image" rounded />
            </ST.ImageWrapper>
          </Column>
        </Row>
      </ST.Header>
      <ST.Messages>
        <div className="MessagesInner">

        </div>
      </ST.Messages>
      <ST.InputSection>

      </ST.InputSection>
    </ST.Wrapper>
  )
}

export default DialogItemOpen
