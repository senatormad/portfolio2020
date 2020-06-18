import React from 'react';
import { ReactSVG } from 'react-svg';

const IdCard = ({ info, socialMenus }) => {
  const imgUrl = (info.profilePic.width > 160) ? ([info.profilePic.url.slice(0, 9), 'thumbnail_', info.profilePic.url.slice(9)].join('')) : info.profilePic.url;
  return (
    <section className="idCard">
      <div className="left">
        <img src={process.env.REACT_APP_BACKEND_URL + imgUrl} alt={`${info.firstName}'s profile pic`} />
      </div>
      <div className="right">
        <h1>
          {info.firstName}
          {' '}
          {info.lastName}
        </h1>
        <h4>{info.jobTitle}</h4>
        <ul className="social">
          {socialMenus.map((socialItem) => {
            return (
              <li key={socialItem.id}>
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactSVG className="socialSvg" src={process.env.REACT_APP_BACKEND_URL + socialItem.logo.url} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default IdCard;
