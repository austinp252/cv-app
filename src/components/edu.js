import React from "react";

const Edu = (props) => {
    const { editMode, eduItems, onSubmitEduItem, onDeleteEduItem, addEduItem, } = props;
    if (editMode) {
        return (
            <div className='panel-editMode'>
                <h2>Education</h2>
                {eduItems.map((eduItem) => {
                    return (
                        <div className='item-editMode'>
                            <form onSubmit={(e) => onSubmitEduItem(e, eduItem.id)}>
                                <label htmlFor="uniNameInput">School Name</label>
                                <input placeholder={eduItem.uniName} type="text" id="uniNameInput"></input>
                                <label htmlFor="startDateInput">Start Date</label>
                                <input placeholder={eduItem.startDate} type="text" id="startDateInput"></input>
                                <label htmlFor="endDateInput">End Date</label>
                                <input placeholder={eduItem.endDate} type="text" id="endDateInput"></input>
                                <label htmlFor="degreeTitleInput">Degree Title</label>
                                <input placeholder={eduItem.degreeTitle} type="text" id="degreeTitleInput"></input>
                                <button type="Submit">
                                    Submit
                                </button>
                                <button onClick={() => onDeleteEduItem(eduItem.id)}>
                                    Remove
                                </button>
                            </form>
                        </div>
                    )
                })}
                <button className='addItem' onClick={() => addEduItem()}>
                    + Education
                </button>
            </div>
        );
    } else { //preview mode
        if (eduItems.length > 0) {
            return (
                <div className='panel-previewMode'>
                    <div className='title'>EDUCATION</div>
                    <div className='items'>
                        {eduItems.map((eduItem) => {
                            return (
                                <div className='itemContent'>
                                    <div className='info'>
                                        <p>{eduItem.uniName}</p>
                                        <p>{eduItem.degreeTitle}</p>
                                    </div>
                                    <div className='dates'>
                                        {eduItem.startDate}-{eduItem.endDate}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>);
        } else {
            return (<div></div>)
        }
    }
};

export default Edu;