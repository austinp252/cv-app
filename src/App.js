import './styles/App.css';
import React, {Component} from 'react';
import Header from './components/header';
import Edu from './components/edu';
import Exp from './components/exp';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = { //reinit eduItems
      editMode: true,
      basicInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      eduItems: [],
      expItems: [],
    }
  }

  edit = () => {
    this.setState({
      editMode: true,
    });
  };

  preview = () => {
    this.setState({
      editMode: false,
    });
  };

  onSubmitBasicInfo = (e) => {
    e.preventDefault();
    this.setState({
      basicInfo: {
        firstName: e.target.firstNameInput.value,
        lastName: e.target.lastNameInput.value,
        email: e.target.emailInput.value,
        phone: e.target.phoneInput.value,
      },
    });

  };

  onSubmitEduItem = (e, id) => {
    e.preventDefault();
    let copyList = this.state.eduItems;
    let index = copyList.findIndex(item => item.id === id);
    let eduItem = copyList[index];
    eduItem.uniName = e.target.uniNameInput.value;
    eduItem.startDate = e.target.startDateInput.value;
    eduItem.endDateName = e.target.endDateInput.value;
    eduItem.degreeTitle = e.target.degreeTitleInput.value;
    this.setState({
      eduItems: copyList,
    })
  };

  onDeleteEduItem = (id) => {
    let copyList = this.state.eduItems;
    copyList = copyList.filter(item => item.id !== id);
    this.setState({
      eduItems: copyList,
    });
  };

  addEduItem = () => {
    this.setState({
      eduItems: this.state.eduItems.concat({
        uniName: '',
        startDate: '',
        endDateName: '',
        degreeTitle: '',
        id: uniqid(),
      })
    })
  }

  onSubmitExpItem = (e, id) => {
    e.preventDefault();
    let copyList = this.state.expItems;
    let index = copyList.findIndex(item => item.id === id);
    let expItem = copyList[index];
    expItem.company = e.target.companyNameInput.value;
    expItem.title = e.target.titleNameInput.value;
    expItem.startDate = e.target.startDateInput.value;
    expItem.endDate = e.target.endDateInput.value;
    expItem.task = e.target.taskInput.value;
    this.setState({
      expItems: copyList,
    })
  }

  onDeleteExpItem = (id) => {
    let copyList = this.state.expItems;
    copyList = copyList.filter(item => item.id !== id);
    this.setState({
      expItems: copyList,
    });
  }

  addExpItem = () => {
    this.setState({
      expItems: this.state.expItems.concat({
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        task: '',
        id: uniqid(),
      })
    })
  }

  render() { //props passed should be named correctly in component
    const {editMode, basicInfo, eduItem} = this.state;
    let contentBasic = null;
    let contentEdu = null;

    if(editMode) { //edit mode is toggled
      contentBasic =  
      <div className = 'panel'>
        <form onSubmit={this.onSubmitBasicInfo}>
          <label htmlFor="firstNameInput">First Name</label>
          <input placeholder={basicInfo.firstName} type="text" id="firstNameInput"></input>
          <label htmlFor="lastNameInput">Last Name</label>
          <input placeholder={basicInfo.lastName} type="text" id="lastNameInput"></input>
          <label htmlFor="emailInput">Email Address</label>
          <input placeholder={basicInfo.email} type="text" id="emailInput"></input>
          <label htmlFor="phoneInput">Phone Number</label>
          <input placeholder={basicInfo.phone} type="text" id="phoneInput"></input>
          <button type="Submit">
              Submit
          </button>
        </form>
      </div>;
    } else { //preview mode is toggled
      contentBasic =
      <div>
        <div className = 'panel'>
          <h2>Name: {basicInfo.firstName} {basicInfo.lastName}</h2>
          <h2>Email Address: {basicInfo.email}</h2>
          <h2>Phone Number: {basicInfo.phone}</h2>
        </div>
      </div>;
    }


    return (
      <div className="App">
        <Header/>
        <div className='buttons'>
          <button
          onClick = {this.edit}
          >
          Edit Mode
          </button>
          <button
          onClick = {this.preview}
          >
            Preview Mode</button>
        </div>
        <div>{contentBasic}</div>

        <Edu editMode = {this.state.editMode} eduItems = {this.state.eduItems} onSubmitEduItem = {this.onSubmitEduItem} onDeleteEduItem = {this.onDeleteEduItem}/>
        <button className = 'addItem' onClick = {() => this.addEduItem()}>
            + Education
        </button>
        <Exp editMode = {this.state.editMode} expItems = {this.state.expItems} onSubmitExpItem = {this.onSubmitExpItem} onDeleteExpItem = {this.onDeleteExpItem}/>
        <button className = 'addItem' onClick = {() => this.addExpItem()}>
            + Experience
        </button>
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
    https://coolors.co/0466c8-0353a4-023e7d-002855-001845-001233-33415c-5c677d-7d8597-979dac
*/

export default App;
