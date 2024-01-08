import './App.css';
// import MyComponent from './Component/MyComponent';
// import Welcome from './Component/Welcome';
// import Exmstate from './Component/Exm_state';
// import useAnu1 from './useAnu1';
// import EventHandlingExmp from './Component/EventHandlingExmp';
// import MyList from './Component/MyList';
// import StyleButton, {NewStyleButton} from './Component/StyleButton';
import { useState } from 'react';
import AddItem from './Component/AddItem';
import Content from './Component/Content';
import Search from './Component/Search';

function App() {
  // const {count, increment, decrement} = useAnu1(5,10);

  // <div className="App">
  //   <MyComponent />
  //   <Welcome  />
  //   <Exmstate />
  //   <div>
  //     <p>Count: {count}</p>
  //     <button onClick={increment}>Increment</button>
  //     <button onClick={decrement}>Decrement</button>
  //   </div>
  //   <EventHandlingExmp message="Playing!">Play Movie</EventHandlingExmp>
  //   <MyList />
  //   <br/>
  //   <StyleButton back='outline'>New button</StyleButton >
  //   <br/>
  //   <NewStyleButton as = 'a'>New button1</NewStyleButton>
  // </div>

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myCart')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('myCart', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items && items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...(items || []), myNewItem];
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  return (
    <div>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Search 
        search = {search}
        setSearch = {setSearch}
      />
      <Content
        items={(items || []).filter(item => (item && item.item && item.item.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
