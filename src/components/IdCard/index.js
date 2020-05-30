import React from 'react';
import { ReactSVG } from 'react-svg';


const IdCard = ({ info, socialMenus }) => {
  return (
    <section className="idCard">
      <div className="left">
        <img src={process.env.REACT_APP_BACKEND_URL + info.profilePic.url} alt={`${info.firstName}'s profile pic`} />
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
