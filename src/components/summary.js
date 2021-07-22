import react from "react";

const Summary = (props) => {
    const { editMode, summary, onSubmitSummary } = props;
    if (editMode) {
        return (
            <div className='panel-editMode'>
                <h2>Summary</h2>
                <div className='item-editMode'>
                    <form onSubmit={(e) => onSubmitSummary(e)}>
                        <label htmlFor="summaryInput">Summary</label>
                        <textarea name='summaryInput' placeholder={summary}></textarea>
                        <button type="Submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div className='panel-previewMode'>
                <div className='title'>SUMMARY</div>
                <div className='items'>
                    <div className='itemContent'>
                        <p className='summary'>{summary}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;