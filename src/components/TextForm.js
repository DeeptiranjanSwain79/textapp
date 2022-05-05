import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

    document.title = "Text App - Word Counter | Character Counter | UpperCase to LowerCase | LoewrCase to UpperCase";

    // text = "abcd";      //Wrong ay to change the state
    // setText("new Text"); //This is the correct way

    //Function to change the letters to uppercase
    const toUpCase = () => {
        // console.log("Button CLicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper case", "success");
    }

    //Function to change the letters to lowercase
    const toLowCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower case", "success");
    }

    //Function to clear all the text from the text area
    const clearAll = () => {
        setText("");
        props.showAlert("All Cleared", "warning");
    }

    //Function to copy all the texts from the textarea
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    //Function to remove the extra spaces
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }

    //If this function is not there then you can't write anything in the text area
    const handleOnChnage = (event) => {
        // console.log("Unchange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: `${props.mode === 'dark' ? 'white' : 'black'}` }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{ backgroundColor: `${props.mode === 'dark' ? 'white' : '#021d41'}`, color: `${props.mode === 'dark' ? 'white' : 'black'}` }}>
                    <textarea className='form-control' style={{ backgroundColor: `${props.mode === 'dark' ? '#1c4d8e' : 'white'}`, color: `${props.mode === 'dark' ? 'white' : 'black'}` }} rows='8' value={text} onChange={handleOnChnage} id="myBox" placeholder='Enter Text Here' ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={toUpCase}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={toLowCase}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={clearAll}>Clear All</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={removeExtraSpace}>Remove extra spaces</button>
            </div>

            <div className="container my-3" style={{ color: `${props.mode === 'dark' ? 'white' : 'black'}` }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} minutes to read</p>
                {/* 0.08 seconds is the averafe time to read a word */}

                <h2>Preview</h2>
                <p>{(text.length > 0) ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

// TextForm.propTypes = {
//     heading: PropTypes.string.isRequired,
// }