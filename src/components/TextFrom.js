import React, { useState } from 'react'

export default function TextFrom(props) {

    const handleUpClick = () => {
        //console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        //console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        //console.log(text);
        let newText = "";
        setText(newText);
        props.showAlert("Clear text area ", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges(); //remove copy blue color after copied text
        props.showAlert("Copy text ", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success");
    }



    const [text, setText] = useState('');
    // text = "New text";  //wrong way to change the state
    //setText("New text");  //correct way to change the state, because states us change through setText function

    return (

        <>

            <div className='container'>

                <h1 className='mb-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'White' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary btn-sm me-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to UpperCase</button>
                <button className="btn btn-primary btn-sm me-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to LowerCase</button>
                <button className="btn btn-primary btn-sm me-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
                <button className="btn btn-primary btn-sm me-1 my-1" onClick={handleCopy} disabled={text.length === 0}>CopyText</button>

                <button className="btn btn-primary btn-sm me-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
            </div >

            <div className="container my-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3 >Text Summary</h3>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} Wrods and {text.length} Characters.</p>
                <p> {0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} minutes time to take read all paragraph</p>
                <h3>Preview Paragraph</h3>
                <p>{(text === "") ? `Nothing to Preview !` : text}</p>
            </div>

        </>

    )
}
