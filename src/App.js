import './styles/App.css';
import './styles/editComponent.css';
import './styles/previewComponent.css';
import './styles/modeButtons.css';

import React, { Component, useState } from 'react';

import Header from './components/header';
import ModeButtons from './components/modeButtons';
import BasicInfo from './components/basicInfo';
import Summary from './components/summary';
import Edu from './components/edu';
import Exp from './components/exp';

import uniqid from "uniqid";

const App = () => {
  // constructor() {
  //   super();

  //   this.state = { //reinit eduItems
  //     editMode: true,
  //     basicInfo: {
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       phone: '',
  //       address: '',
  //     },
  //     summary: '',
  //     eduItems: [],
  //     expItems: [],
  //   }
  // }

  const [editMode, setEditMode] = useState(true);
  const [basicInfo, setBasicInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [summary, setSummary] = useState('');
  const [eduItems, setEduItems] = useState([]);
  const [expItems, setExpItems] = useState([]);

  const edit = () => {
    setEditMode(true);
  };

  const preview = () => {
    setEditMode(false);
  };

  const onSubmitBasicInfo = (e) => {
    e.preventDefault();
    setBasicInfo({
      firstName: e.target.firstNameInput.value,
      lastName: e.target.lastNameInput.value,
      email: e.target.emailInput.value,
      phone: e.target.phoneInput.value,
      address: e.target.addressInput.value
    });
  };

  const onSubmitSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.summaryInput.value);
  };

  const onSubmitEduItem = (e, id) => {
    e.preventDefault();
    let copyList = eduItems;
    let index = copyList.findIndex(item => item.id === id);
    let eduItem = copyList[index];
    eduItem.uniName = e.target.uniNameInput.value; //consider refactoring
    eduItem.startDate = e.target.startDateInput.value;
    eduItem.endDate = e.target.endDateInput.value;
    eduItem.degreeTitle = e.target.degreeTitleInput.value;
    eduItem.gpa = e.target.gpaInput.value;
    setEduItems(copyList);
  };

  const onDeleteEduItem = (id) => {
    let copyList = eduItems;
    copyList = copyList.filter(item => item.id !== id);
    setEduItems(copyList);
  };

  const addEduItem = () => {
    setEduItems(eduItems.concat({
      uniName: '',
      startDate: '',
      endDateName: '',
      degreeTitle: '',
      gpa: '',
      id: uniqid()
    }));
  }

  const onSubmitExpItem = (e, id) => {
    e.preventDefault();
    let copyList = expItems;
    let index = copyList.findIndex(item => item.id === id);
    let expItem = copyList[index];
    expItem.company = e.target.companyNameInput.value;
    expItem.title = e.target.titleNameInput.value;
    expItem.startDate = e.target.startDateInput.value;
    expItem.endDate = e.target.endDateInput.value;
    expItem.description = e.target.descriptionInput.value;
    setExpItems(copyList);
  }

  const onDeleteExpItem = (id) => {
    let copyList = this.state.expItems;
    copyList = copyList.filter(item => item.id !== id);
    setExpItems(copyList);
  }

  const addExpItem = () => {
    setExpItems(expItems.concat({
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid(),
    }));
  }


  return (
    <div className="App">
      <Header />
      <ModeButtons edit={edit} preview={preview} />
      <div className='content'>
        <BasicInfo editMode={editMode} basicInfo={basicInfo} onSubmitBasicInfo={onSubmitBasicInfo} />
        <Summary editMode={editMode} summary={summary} onSubmitSummary={onSubmitSummary} />
        <Edu editMode={editMode} eduItems={eduItems} onSubmitEduItem={onSubmitEduItem} onDeleteEduItem={onDeleteEduItem} addEduItem={addEduItem} />
        <Exp editMode={editMode} expItems={expItems} onSubmitExpItem={onSubmitExpItem} onDeleteExpItem={onDeleteExpItem} addExpItem={addExpItem} />
      </div>
    </div>
  );
}

/*
  - styling of hr's
  - color options
  - scaling of page
  - color options
  - option to select image from pc
  - footer w/ github  

  - onchange vs save changes?

  - refactor styling, imports, organization
*/

export default App;
