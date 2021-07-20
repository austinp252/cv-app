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
                    </div>
                    )
                })}
            </div>
            );
    } else { //preview mode
        if(eduItems.length > 0) {
            return(
            <div className='panel-preview-edu'>
                <div className = 'preview-title'>Education</div>
                <div className = 'preview-items'>
                {eduItems.map((eduItem) => {
                    return(
                    <div className = 'preview-main-content'>
                        <div className = 'preview-school-info'>
                            <p>{eduItem.uniName}</p>
                            <p>{eduItem.degreeTitle}</p>
                        </div>
                        <div className = 'preview-school-dates'>
                            {eduItem.startDate}-{eduItem.endDate}
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>);
        } else {
            return(<div></div>)
        }
    }
};

export default Edu;