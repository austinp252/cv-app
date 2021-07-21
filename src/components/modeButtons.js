import react from "react";

const ModeButtons = (props) => {
    const { edit, preview } = props;
    return (
        <div className='mode-buttons'>
            <button
                onClick={edit}
            >
                Edit Mode
            </button>
            <button
                onClick={preview}
            >
                Preview Mode</button>
        </div>
    );
}

export default ModeButtons;