import React,{useState} from 'react';


export default function TextForm(props) {
  

  const handleUpClick=()=>{
    // console.log('handleUpClick was clicked'+text);
    let newtext = text.toUpperCase();
    setText(newtext)
    // if(props.showAlert)
      props.showAlert("converted to uppercase","success")
  }
  const handleLoClick=()=>{
    // console.log('handleUpClick was clicked'+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success")

  }
  const handleOnChange=(event)=>{
    // console.log('handleOnChange was clicked');
    setText(event.target.value);

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaking","success")

  }
  const [text, setText] =useState('enter text here');
  return (
    <>
<div className='textarea'>
      <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id=" myBox" rows="9"></textarea>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={speak}>Speak</button>

      </div>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split("").length} words </p> 
        <p>{text.length} characters</p>
        <p>{0.08 * text.split("").length} mins read</p>
        <p>{text.split(".").length}</p>
      </div>
      </div>
    </>
      
    
  );
}
