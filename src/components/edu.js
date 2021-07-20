import React from "react";

const Edu = (props) => {
    const {editMode, eduItems, onSubmitEduItem, onDeleteEduItem,} = props;
    if(editMode) {
        return(
            <div>
                {eduItems.map((eduItem) => {
                    return(
                    <div className='panel'>
                        <form onSubmit={(e)=> onSubmitEduItem(e, eduItem.id)}>
                            <label htmlFor="uniNameInput">School Name</label>
                            <input placeholder={eduItem.uniName} type="text" id="uniNameInput"></input>
                            <label htmlFor="startDateInput">Start Date</label>
                            <input placeholder={eduItem.startDate} type="text" id="startDateInput"></input>
                            <label htmlFor="endDateInput">Start Date</label>
                            <input placeholder={eduItem.endDate} type="text" id="endDateInput"></input>
                            <label htmlFor="degreeTitleInput">Degree Title</label>
                            <input placeholder={eduItem.degreeTitle} type="text" id="degreeTitleInput"></input>
                            <button type="Submit">
                                Submit
                            </button>
                        </form>
                        <button onClick={() => onDeleteEduItem(eduItem.id)}>
                            Remove
                        </button>
                    </div>)
                })}
            </div>);
    } else { //preview mode
        return(<div>
            {eduItems.map((eduItem) => {
                return(
                <div className='panel'>
                    <h2>{eduItem.uniName}</h2>
                    <h2>{eduItem.startDate} - {eduItem.endDate}</h2>
                    <h2>{eduItem.degreeTitle}</h2>
                </div>)
            })}
        </div>);
    }
};

export default Edu;

/*
if(this.state.eduItems.length === 0) { //button to add eduItem
    contentEdu = 
    <div className = 'addItem' onCLick={this.addEduItem(0)}>
      + Education
    </div>;
  } else { //display panel for each eduItem
    const eduItems = this.state.eduItems;
    console.log(eduItems);
    contentEdu = <div>
    eduItems.forEach((item) => {
      console.log(item);
      contentEdu += 
      <div className='panel'>
      <form onSubmit={this.onSubmiteduItem}>
        <label htmlFor="uniNameInput">School Name</label>
        <input placeholder={item.uniName} type="text" id="uniNameInput"></input>
        <label htmlFor="startDateInput">Start Date</label>
        <input placeholder={item.startDate} type="text" id="startDateInput"></input>
        <label htmlFor="endDateInput">Start Date</label>
        <input placeholder={item.endDate} type="text" id="endDateInput"></input>
        <label htmlFor="degreeTitleInput">Degree Title</label>
        <input placeholder={item.degreeTitle} type="text" id="degreeTitleInput"></input>
        <button type="Submit">
            Submit
        </button>
      </form>
      <button type="Submit">
            Add Another Degree
      </button>
      <button type="Submit">
            Remove This Degree
      </button>
    </div>
    });
    contentEdu += </div>;
    console.log(contentEdu)
  }
  */