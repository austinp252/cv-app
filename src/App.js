import './styles/App.css';
import './styles/basicInfo.css';
import './styles/edu.css';
import './styles/exp.css';

import React, { Component } from 'react';

import Header from './components/header';
import BasicInfo from './components/basicInfo';
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
    eduItem.endDate = e.target.endDateInput.value;
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
    const { editMode, basicInfo, eduItem } = this.state;
    let contentBasic = null;
    let contentEdu = null;

    return (
      <div className="App">
        <Header />
        <div className='buttons'>
          <button
            onClick={this.edit}
          >
            Edit Mode
          </button>
          <button
            onClick={this.preview}
          >
            Preview Mode</button>
        </div>

        <div className='content'>
          <BasicInfo editMode={this.state.editMode} basicInfo={this.state.basicInfo} onSubmitBasicInfo={this.onSubmitBasicInfo} />
          <Edu editMode={this.state.editMode} eduItems={this.state.eduItems} onSubmitEduItem={this.onSubmitEduItem} onDeleteEduItem={this.onDeleteEduItem} addEduItem={this.addEduItem} />
          <Exp editMode={this.state.editMode} expItems={this.state.expItems} onSubmitExpItem={this.onSubmitExpItem} onDeleteExpItem={this.onDeleteExpItem} addExpItem={this.addExpItem} />
        </div>
      </div>
    );
  }
}

/*
  - Display in meaningful way on preview mode
  - Align form items in similar way to form in preview
  - Seperate Education, experience sections
  - Change button layout
*/

export default App;
