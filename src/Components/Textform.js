import React, {useState} from 'react'


export default function Textform(props) {
const upperCase= ()=> {
   let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upper case', "success")
}
const lowerCase= ()=> {
    let newText = Text.toLowerCase();
     setText(newText)
 }
 const copy= ()=> {
  let newText = document.getElementById('textarea');
 navigator.clipboard.writeText(newText.value)
 
}
 const clearText= ()=> {
     setText('')
 }
 
 const shortestWord = ()=> {
   let subString = Text.split(' ');
   let min = 999999999;
   let word = '';
   for(let i=0; i<subString.length ; i++){
     if(subString[i].length<min){
        min =subString[i].length
        word = subString[i];
     }
   }
   let sw= document.getElementById('sw')
   var textnode = document.createTextNode("Shortest word is " +word.toUpperCase() + ' whose length is '+min);
   sw.appendChild(textnode);
  
 }
 const longestWord = ()=> {
    let subString = Text.split(' ');
    let max = 0;
    let word = '';
    for(let i=0; i<subString.length ; i++){
      if(subString[i].length>max){
         max =subString[i].length;
         word = subString[i]; 
      }
    }
   let lw= document.getElementById('lw')
   var textnode = document.createTextNode("Longest word is " + word.toUpperCase() + ' whose length is ' +max);
   lw.appendChild(textnode);

  }
 

const handleChange = (event)=>{
    // console.log('hc')
    setText(event.target.value)
}

    const [Text, setText] = useState('enter text here'); //usestate is a hook
    //everytime to update the value of text we need to use the settext fn
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container">
    
   
        <h1>{props.heading}</h1>
  <div className="form-group">
    
    <textarea
      className="form-control"
      style={{backgroundColor : props.mode==='dark'?'rgb(86, 81, 81)':'white', 
      color:props.mode==='dark'?'white':'black'}}
      id="textarea"
      rows={5}
      value={Text} onChange={handleChange}
    />
  </div>

  <button type="button" className="btn btn-primary mx-2 my-2" onClick={upperCase} >Convert to upperCase</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={lowerCase} >Convert to lowerCase</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText} >Clear Text</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={shortestWord} >Find shortest word</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={longestWord} >Find Longest word</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={copy} >Copy Text</button>
  </div>

  <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-4">
    <h2>Your text summary</h2>
    <h6 >{Text.split(' ').filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</h6>
    <h6>{0.008*Text.split(' ').length} time to read</h6>
    <h6 id='sw'> </h6>
    <h6 id='lw'> </h6>
   
  </div>
  
  </>
  )
}
