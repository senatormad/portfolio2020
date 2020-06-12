import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';
import Typist from 'react-typist';
import Query from '../Query';

import SITE_MENU_QUERY from '../../queries/siteMenu/siteMenu';

const typistText = '["javascript", "react", "frontend", "node.js", "css3", "..."]';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(event) {
    if (event.button === 0) {
      const prevState = this.state.darkMode;
      this.setState({
        darkMode: !prevState,
      });
    }
  }

  documentColor() {
    if (this.state.darkMode === false) {
      document.body.classList.add('whiteMode');
      const socialsSvgs = document.getElementsByClassName('socialSvg');
      for (let i = 0; i < socialsSvgs.length; i += 1) {
        socialsSvgs[i].getElementsByTagName('svg')[0].style.color = '#181818';
      }
    } else {
      document.body.classList.remove('whiteMode');
      const socialsSvgs = document.getElementsByClassName('socialSvg');
      for (let i = 0; i < socialsSvgs.length; i += 1) {
        socialsSvgs[i].getElementsByTagName('svg')[0].style.color = '#fff';
      }
    }
  }

  render() {
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
                  <li>
                    <button type="button" onMouseDown={this.changeMode}>
                      <label htmlFor="modeSwitch" className="switch">
                        <input type="checkbox" className="switch__state" id="modeSwitch" />
                        <span className="switch__toggle" />
                      </label>
                    </button>
                  </li>
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
        { this.documentColor() }
      </>
    );
  }
}

export default Nav;
