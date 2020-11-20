import React from 'react';
import shortid from 'shortid';
import classnames from 'classnames';
import AppContext from '../../AppContext';
import StandardBtn from '../../StandardBtn/StandardBtn';
import sectionNames from '../../sectionNames';
import './HeaderNav.scss';

class HeaderNav extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.navBtns = sectionNames.map((name) => {
      return { text: name, id: shortid.generate() };
    });
  }

  render() {
    const { currentSection, changeCurrentSection } = this.context;

    return (
      <nav className="main-nav">
        {this.navBtns.map(({ text, id }, num) => {
          const classes = classnames('main-nav__item', {
            'main-nav__item--active': num === currentSection,
          });

          return (
            <StandardBtn key={id} className={classes} onClick={() => changeCurrentSection(num)}>
              {text}
            </StandardBtn>
          );
        })}
      </nav>
    );
  }
}

export default HeaderNav;
