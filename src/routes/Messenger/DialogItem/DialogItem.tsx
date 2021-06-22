import * as ST from './styled'
import Row from '../../../components/Row'
import Column from '../../../components/Column'
import Image from '../../../components/Image'
import { FC } from 'react'
import { DialogItemType } from '../../../types/types'

export interface DialogItemProps {
  dialogItem: DialogItemType
  onDialogItemSelect: (selectedDialogItemId: number) => void
}

const DialogItem: FC<DialogItemProps> = ({ dialogItem: { id, src, name, text, }, onDialogItemSelect }) => {

  return (
    <ST.Wrapper onClick={() => onDialogItemSelect(id)}>
      <Row>
        <Column>
          <ST.ImageWrapper>
            <Image
              src={src}
              alt="dialog-img"
              rounded
            />
          </ST.ImageWrapper>
        </Column>
        <Column>
          <ST.Content>
            <ST.Name>{name}</ST.Name>
            <ST.Text>{text}</ST.Text>
          </ST.Content>
        </Column>

      </Row>
    </ST.Wrapper>
  )
}

export default DialogItem
