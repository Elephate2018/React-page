import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';

const Navigation = props => (
    <div className="containerr">
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={`https://image.flaticon.com/icons/svg/21/21601.svg`} width="60" height="60" alt="" />
      </Link>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-black-list nav-link disabled hover-main-links" to="/AbcNews">ABC News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-black-list nav-link disabled hover-main-links" to="/BBC_News">BBC News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-black-list nav-link disabled hover-main-links" to="/CBC_News">CBC News</Link>
        </li>
      </ul>
      </nav>
      <div>
        <ul className="nav justify-content-center bg-nav">
            <Link className="nav-link disabled nav-white-list home-button" to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/Money_News">
              <li className="nav-item">Money</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/Sport">
              <li className="nav-item">Sport</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/NBC_News">
              <li className="nav-item">NBC News</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/Neewsweek">
              <li className="nav-item">Newsweek</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/Policy">
              <li className="nav-item">Policy</li>
            </Link>
            <Link className="nav-link disabled nav-white-list" to="/UsaToday">
              <li className="nav-item">USA Today</li>
            </Link>
        </ul>
      </div>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
);

export default Navigation;
