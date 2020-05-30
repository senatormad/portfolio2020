import React from 'react';
import { ReactSVG } from 'react-svg';
import Typist from 'react-typist';
import Query from '../Query';

import SITE_MENU_QUERY from '../../queries/siteMenu/siteMenu';

const Nav = () => {
  const typistText = '["javascript", "react", "frontend", "node.js", "css3", "html5", "..."]';
  return (
    <>
      <Query query={SITE_MENU_QUERY} id={null}>
        {({ data: { socialMenus } }) => {
          return (
            <nav>
              <Typist>
                <span>
                  {' '}
                  {typistText}
                  {' '}
                </span>
              </Typist>
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
            </nav>
          );
        }}
      </Query>
    </>
  );
};

export default Nav;
