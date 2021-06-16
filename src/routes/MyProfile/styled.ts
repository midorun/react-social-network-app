import styled from 'styled-components'

export const Styled = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: gray; */

  .info{
    padding: 15px;
    width: 100%;
    height: 230px;
    display:grid;
    grid-template-columns: 245px auto;
    background-color: #fff;
    border-radius:4px;
  }

  .info__img{
    width: 200px;
    height: 200px;

    img{
      border-radius: 2px;
    }
  }

  .info__text{
  }

  .myprofile__photos, .myprofile__posts{
    margin-top: 15px;
  }
`