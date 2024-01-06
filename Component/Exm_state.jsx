import React, {useState} from 'react';

function Exmstate() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Enter text");

  const handleChange = (e) => {
    //console.log(e);
    console.log(e.target);
    setText(e.target.value);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button><br />
      <textarea name="txt" value={text} onChange={handleChange} id="" cols="30" rows="10"></textarea>
    </div>
  );
}

export default Exmstate;