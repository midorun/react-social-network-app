import styled from 'styled-components'

export const Wrapper = styled.div<{rounded?: boolean}>`
  img{
    /* width: 100%; */
    border-radius: ${({rounded}) => rounded ? '50%' : 0}
  }
`