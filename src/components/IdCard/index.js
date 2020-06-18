import React from 'react';
import { ReactSVG } from 'react-svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IdCard = ({ info, socialMenus }) => {
  const imgUrl = (info.profilePic.width > 160) ? ([info.profilePic.url.slice(0, 9), 'thumbnail_', info.profilePic.url.slice(9)].join('')) : info.profilePic.url;
  return (
    <section className="idCard">
      <div className="left">
        <LazyLoadImage
          alt={`${info.firstName}'s profile pic`}
          src={process.env.REACT_APP_BACKEND_URL + imgUrl}
          effect="blur"
        />
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
