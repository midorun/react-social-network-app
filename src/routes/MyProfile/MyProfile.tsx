import * as ST from './styled'

import InfoImg from './info__img.jpg'
const MyProfile = () => {
  return (
    <ST.Wrapper className="myprofile">
      <div className="myprofile__info info">
        <div className="info__img">
          <img src={InfoImg} alt="" className="myprofile__img" />
        </div>
        <div className="info__text">
          <div className="info__name">Dmitriy Vorozheykin</div>
          <div className="info__online"></div>
          <div className="info__status"></div>
          <div className="info__additional"></div>
          <div className="info__summary"></div>
        </div>
      </div>
      <div className="myprofile__photos"></div>
      <div className="myprofile__posts"></div>
    </ST.Wrapper>
  )
}

export default MyProfile
