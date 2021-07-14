import React from "react";

const Header = (props) => {
    const { basicInfo } = props;
    return(
        <div>
            <h2>First Name: {basicInfo.firstName}</h2>
            <h2>Last Name: {basicInfo.lastName}</h2>
            <h2>Email: {basicInfo.email}</h2>
            <h2>Phone: {basicInfo.phone}</h2>
        </div>
    );
};

export default Header;