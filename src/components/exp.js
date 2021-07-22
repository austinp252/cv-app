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
                                <div className='form-fields'>
                                    <label htmlFor="companyNameInput">Company Name</label>
                                    <input placeholder={expItem.company} type="text" id="companyNameInput"></input>
                                    <label htmlFor="titleNameInput">Title</label>
                                    <input placeholder={expItem.title} type="text" id="titleNameInput"></input>
                                    <label htmlFor="startDateInput">Start Date</label>
                                    <input placeholder={expItem.startDate} type="text" id="startDateInput"></input>
                                    <label htmlFor="endDateInput">End Date</label>
                                    <input placeholder={expItem.endDate} type="text" id="endDateInput"></input>
                                    <label htmlFor="descriptionInput">Description</label>
                                    <textarea placeholder={expItem.description} name="descriptionInput"></textarea>
                                </div>
                                <div className='form-buttons'>
                                    <button type="Submit">
                                        Submit
                                    </button>
                                    <button onClick={() => onDeleteExpItem(expItem.id)}>
                                        Remove
                                    </button>
                                </div>
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
                                        <div className='primary'>
                                            <p>{expItem.company}</p>
                                        </div>
                                        <div className='secondary'>
                                            <p>{expItem.title}</p>
                                            <p>{expItem.description}</p>
                                        </div>
                                    </div>
                                    <div className='dates'>
                                        {expItem.startDate}-{expItem.endDate}
                                    </div>
                                    <hr></hr>
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