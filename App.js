import './App.css';
import MyComponent from './Component/MyComponent';
import Welcome from './Component/Welcome';
import Exmstate from './Component/Exm_state';
import useAnu1 from './useAnu1';
import EventHandlingExmp from './Component/EventHandlingExmp';
import MyList from './Component/MyList';
import StyleButton, {NewStyleButton} from './Component/StyleButton';

function App() {
  const {count, increment, decrement} = useAnu1(5,10);
  return (
    <div className="App">
      <MyComponent />
      <Welcome  />
      <Exmstate />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <EventHandlingExmp message="Playing!">Play Movie</EventHandlingExmp>
      <MyList />
      <br/>
      <StyleButton back='outline'>New button</StyleButton >
      <br/>
      <NewStyleButton as = 'a'>New button1</NewStyleButton>
    </div>
  );
}

export default App;
