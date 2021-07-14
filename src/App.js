import './styles/App.css';
import React, {Component} from 'react';
import Header from './components/header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      basicInfo: {
        firstName: 'aa',
        lastName: 'bb',
        email: 'xx',
        phone: 'zz',
      },
      testData: '',
    }
  }

  render() { //props passed should be named correctly in component
    const {basicInfo} = this.state;
    return (
      <div className="App">
        <Header basicInfo={basicInfo}/>
      </div>
    );
  }
}

/*
  - resume                                          - resume.js
    - Header bar with name, email, phone, (contact) - header.js
    - Summary/Career objective                      - summary.js
    - Education (name, degree title, dates)         - edu.js
    - Experience(title, company, dates, tasks)      - exp.js
*/

export default App;
