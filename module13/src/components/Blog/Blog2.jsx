import  { useRef } from 'react';

function Blog2() {
    const myInputRef = useRef(null);
    const focusInput = () => {
        // Directly access the DOM element and call its native focus method
        myInputRef.current.focus();
      };

  return (
    <div className='refInput'>
    {/* Attach the ref object to an input element */}
    <input ref={myInputRef} type="text" placeholder="Focus me" />
    {/* Button to trigger focusing the input */}
    <div className="homeBtn">
    <button onClick={focusInput} className="btn1">Focus the input</button>
    
   
 </div>
   
  </div>
  )
}

export default Blog2
