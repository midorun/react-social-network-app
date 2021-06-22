import React from 'react'
import * as ST from './styled'

const Photos = () => {
  return (
    <ST.Wrapper>
      <ST.Header>
        <ST.Text>Dmitriy's photos</ST.Text>
        <ST.Count>4</ST.Count>
      </ST.Header>
      <ST.List>
        <ST.Item />
        <ST.Item />
        <ST.Item />
        <ST.Item />
        <ST.Item />
      </ST.List>
    </ST.Wrapper>
  )
}

export default Photos
