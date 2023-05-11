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
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
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

                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'White' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary btn-sm me-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary btn-sm me-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary btn-sm me-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary btn-sm me-1" onClick={handleCopy}>CopyText</button>

                <button className="btn btn-primary btn-sm me-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div >

            <div className="container my-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3 >Text Summary</h3>
                <p>{text.split(" ").length} Wrods and {text.length} Characters.</p>
                <p> {0.008 * text.split(" ").length} minutes time to take read all paragraph</p>
                <h3>Preview Paragraph</h3>
                <p>{(text === "") ? `Enter the text on above given text area to preview it.` : text}</p>
            </div>

        </>

    )
}
