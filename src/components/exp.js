import React from "react"

const Exp = (props) => {
    const { editMode, expItems, onSubmitExpItem, onDeleteExpItem, addExpItem } = props;
    if (editMode) {
        return (
            <div className='panel-editMode'>
                <h2>Experience</h2>
                {expItems.map((expItem) => {
                    return (
                        <div className='item-editMode'>
                            <form onSubmit={(e) => onSubmitExpItem(e, expItem.id)}>
                                <label htmlFor="companyNameInput">Company Name</label>
                                <input placeholder={expItem.company} type="text" id="companyNameInput"></input>
                                <label htmlFor="titleNameInput">Title</label>
                                <input placeholder={expItem.title} type="text" id="titleNameInput"></input>
                                <label htmlFor="startDateInput">Start Date</label>
                                <input placeholder={expItem.startDate} type="text" id="startDateInput"></input>
                                <label htmlFor="endDateInput">End Date</label>
                                <input placeholder={expItem.endDate} type="text" id="endDateInput"></input>
                                <label htmlFor="taskInput">task</label>
                                <input placeholder={expItem.task} type="text" id="taskInput"></input>
                                <button type="Submit">
                                    Submit
                                </button>
                                <button onClick={() => onDeleteExpItem(expItem.id)}>
                                    Remove
                                </button>
                            </form>
                        </div>
                    )
                })}
                <button className='addItem' onClick={() => addExpItem()}>
                    + Experience
                </button>
            </div>
        );
    } else {
        if (expItems.length > 0) {
            return (
                <div className='panel-previewMode'>
                    <div className='title'>EXPERIENCE</div>
                    <div className='items'>
                        {expItems.map((expItem) => {
                            return (
                                <div className='itemContent'>
                                    <div className='info'>
                                        <p>{expItem.company}</p>
                                        <p>{expItem.title}</p>
                                    </div>
                                    <div className='dates'>
                                        {expItem.startDate}-{expItem.endDate}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}

export default Exp;

{/* <div className='panel'>
<h2>{expItem.company}</h2>
<h2>{expItem.title}</h2>
<h2>{expItem.startDate} - {expItem.endDate}</h2>
<h2>{expItem.task}</h2>
</div>) */}