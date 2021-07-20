import React from "react"

const Exp = (props) => {
    const {editMode, expItems, onSubmitExpItem, onDeleteExpItem} = props;
    if(editMode) {
        return(
            <div>
                {expItems.map((expItem) => {
                    return(
                        <div className = 'panel'>
                            <form onSubmit = {(e) => onSubmitExpItem(e, expItem.id)}>
                                <label htmlFor="companyNameInput">Company Name</label>
                                <input placeholder={expItem.company} type="text" id="companyNameInput"></input>
                                <label htmlFor="titleNameInput">Title</label>
                                <input placeholder={expItem.title} type="text" id="titleNameInput"></input>
                                <label htmlFor="startDateInput">Start Date</label>
                                <input placeholder={expItem.startDate} type="text" id="startDateInput"></input>
                                <label htmlFor="endDateInput">Start Date</label>
                                <input placeholder={expItem.endDate} type="text" id="endDateInput"></input>
                                <label htmlFor="taskInput">task</label>
                                <input placeholder={expItem.task} type="text" id="taskInput"></input>
                                <button type="Submit">
                                    Submit
                                </button>
                            </form>
                            <button onClick = {() => onDeleteExpItem(expItem.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return(<div>
            {expItems.map((expItem) => {
                return(
                <div className='panel'>
                    <h2>{expItem.company}</h2>
                    <h2>{expItem.title}</h2>
                    <h2>{expItem.startDate} - {expItem.endDate}</h2>
                    <h2>{expItem.task}</h2>
                </div>)
            })}
        </div>);
    }
}

export default Exp;