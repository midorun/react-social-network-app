import React from 'react';
import CommunitiesIcon from '../../Icons/CommunitiesIcon';
import FriendsIcon from '../../Icons/FriendsIcon';
import MessengerIcon from '../../Icons/MessengerIcon';
import MusicIcon from '../../Icons/MusicIcon';
import NewsIcon from '../../Icons/NewsIcon';
import ProfileIcon from '../../Icons/ProfileIcon';
import Header from '../Header';
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Header />
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
                  <div className="link__icon"><NewsIcon /></div>
                  <span className="link__text">News</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><MessengerIcon /></div>
                  <span className="link__text">Messenger</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><FriendsIcon /></div>
                  <span className="link__text">Friends</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><CommunitiesIcon /></div>
                  <span className="link__text">Communities</span>
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link link" href="/">
                  <div className="link__icon"><MusicIcon className="nav-icon" /></div>
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
