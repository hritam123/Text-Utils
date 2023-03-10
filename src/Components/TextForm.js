import React, {useState} from 'react';


export default function TextForm(props) {
  const myStyle={
    color: props.mode=== "dark" ? "white" : "black"
  }
  const handleUpClick=() => {
    // console.log("upperCase Was Clicked " + text )
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }
  const handleLowClick=() =>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success")
  }
  const handleClearClick=() =>{
    let newText= "";
    setText(newText)
    props.showAlert("Cleared The Text", "success")
  }
 
  const handleCopy=(e) => {
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text is Copied", "success")
  }
  const handleOnChange=(e) => {
    // console.log("On Change")
    setText(e.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={myStyle}>
    <h1 style={myStyle}>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value ={text} onChange={handleOnChange} placeholder="Leave Text Here" id="myBox" rows="8"></textarea>
     </div>
     <button className='btn btn-primary mx-1'onClick={handleUpClick}>Convert To Uppercase</button>
     <button className='btn btn-primary mx-1'onClick={handleLowClick}>Convert To Lowercase</button>
     <button className='btn btn-primary mx-1'onClick={handleClearClick}>Clear Text</button>
     <button className='btn btn-primary mx-1'onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-3' style={myStyle}>
    <h2 > Your Text Summary</h2>
    <p>{text.split(" ").length-1} Words and {text.length} Charracters</p>
    <p>{0.008*(text.split(" ").length-1)} Miniutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "Write Something To Preview It"}</p>
    </div>
    </>
    
  )
}
