import React from 'react';
import AppContext from './AppContext';
import sectionNames from './sectionNames';
import Header from './Header/Header';
import Main from './Main/Main';
import NewsletterSection from './NewsletterSection/NewsletterSection';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSection: 0 };
    this.title = document.querySelector('title');

    this.changeCurrentSection = this.changeCurrentSection.bind(this);
  }

  componentDidUpdate() {
    const { currentSection } = this.state;
    document.title = `Hosting - ${sectionNames[currentSection]}`;
  }

  changeCurrentSection(num) {
    this.setState({ currentSection: num });
  }

  render() {
    const { currentSection } = this.state;
    const { changeCurrentSection } = this;

    return (
      <AppContext.Provider value={{ currentSection, changeCurrentSection }}>
        <Header />
        <Main />
        <NewsletterSection />
      </AppContext.Provider>
    );
  }
}

export default App;
