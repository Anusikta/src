import React, { useState } from 'react';
import PlayButton from './PlayButton';
import UploadButton from './UploadButton';
import styles from './MyStyle.module.css';

const EventHandlingExmp = ({message, children}) => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => { //event handler
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>React Event Handling Example</h1>
      <form onSubmit={handleFormSubmit}>
        <label /*className={styles.MyStyle}*/>
          Enter your name:
        </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <button className={styles.MyStyle} type="submit"  onClick={() => { 
            alert('You clicked me!');
        }}>Submit</button>
      </form>
      
      <p>{greeting}</p>
      <br />
      <button onClick={() => alert(message)}>
      {children}
    </button>
    <br />
    <div onClick={() => alert('Button is clicked')}>
      <PlayButton movieName="Avengers" />
      <UploadButton />
    </div>
    </div>
    
    
  );
};

export default EventHandlingExmp;
