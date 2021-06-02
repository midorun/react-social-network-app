import ProfileIcon from '../../icons/ProfileIcon';
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo"></div>
            <div className="header__searchbar"></div>
            <div className="header__notification-icon"></div>
            <div className="header__music-icon"></div>
            <div className="header__profile profile">
              <div className="profile__nickname"></div>
              <div className="profile__img"></div>
              <div className="profile__nav"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <nav className="nav">
            <ul>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">My profile</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">News</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">Messenger</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">Friends</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">Communities</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><ProfileIcon /></div>
                  <span className="link__text">Music</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="content"></div>
        </div>
      </main>
      <footer className="footer">
        <div className="container"></div>
      </footer>
    </div>
  );
}

export default App;
