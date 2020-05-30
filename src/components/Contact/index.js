import React from 'react';
import { ReactSVG } from 'react-svg';


const Contact = ({ socialMenus }) => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="social">
        <ul>
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

export default Contact;
