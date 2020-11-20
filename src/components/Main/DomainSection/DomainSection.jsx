import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class DomainSection extends React.Component {
  static propTypes = {
    currentSection: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { sectionNumber: 4 };
  }

  render() {
    const { sectionNumber } = this.state;
    const { currentSection } = this.props;

    const classes = classnames('main-content-section', {
      'main-content-section--active': sectionNumber === currentSection,
    });

    return <section className={classes}>Domain</section>;
  }
}

export default DomainSection;
