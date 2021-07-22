import react from "react";

const BasicInfo = (props) => {
    const { editMode, basicInfo, onSubmitBasicInfo } = props;
    if (editMode) {
        return (
            <div className='panel-editMode'>
                <h2>Basic Information</h2>
                <div className='item-editMode'>
                    <form onSubmit={(e) => onSubmitBasicInfo(e)}>
                        <div className='form-fields'>
                            <label htmlFor="firstNameInput">First Name</label>
                            <input placeholder={basicInfo.firstName} type="text" id="firstNameInput"></input>
                            <label htmlFor="lastNameInput">Last Name</label>
                            <input placeholder={basicInfo.lastName} type="text" id="lastNameInput"></input>
                            <label htmlFor="emailInput">Email Address</label>
                            <input placeholder={basicInfo.email} type="text" id="emailInput"></input>
                            <label htmlFor="phoneInput">Phone Number</label>
                            <input placeholder={basicInfo.phone} type="text" id="phoneInput"></input>
                            <label htmlFor="addressInput">Address</label>
                            <input placeholder={basicInfo.address} type="text" id="addressInput"></input>
                        </div>
                        <div className='form-buttons'>
                            <button type="Submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div className='panel-previewMode'>
                <div className='basicInfo'>
                    <img></img>
                    <div>
                        <p className='name'>{basicInfo.firstName} {basicInfo.lastName}</p>
                        <p className='contact'>{basicInfo.email} | {basicInfo.phone}</p>
                        <p>{basicInfo.address}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;