import react from "react";

const BasicInfo = (props) => {
    const { editMode, basicInfo, onSubmitBasicInfo } = props;
    if (editMode) {
        return (
            <div className='panel-edit-basicInfo'>
                <h2>Basic Information</h2>
                <form onSubmit={(e) => onSubmitBasicInfo(e)}>
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
            </div>
        );
    } else {
        return (
            <div className='panel-preview-basicInfo'>
                <img></img>
                <div>
                    <p className='preview-name'>{basicInfo.firstName} {basicInfo.lastName}</p>
                    <p className='preview-contact'>{basicInfo.email} | {basicInfo.phone}</p>
                </div>
            </div>
        );
    }
}

export default BasicInfo;