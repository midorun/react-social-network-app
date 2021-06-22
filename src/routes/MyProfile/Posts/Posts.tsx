import React from 'react'
import * as ST from './styled'

import Image from '../../../components/Image'
import Photo from '../../../assets/Img/photo-1.jpg'

const Posts = () => {
  return (
    <ST.Wrapper>
      <ST.InputSection>
        <Image src={Photo} alt="input image" rounded />
        <ST.InputField>
          <input type="text" placeholder="What's new?" />
        </ST.InputField>
      </ST.InputSection>
      <ST.Section>
        <ST.Filter>

        </ST.Filter>
        <ST.List>

        </ST.List>
      </ST.Section>
    </ST.Wrapper>
  )
}



export default Posts
