import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8000/api";

function App() {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItemList()
  })

  const getItemList = async () => {
    const response = await fetch(`${baseURL}/room`);
    response.json().then((data) => setItemList(data));
    console.log(itemList);
  };

  if(itemList.length > 0){
    return (
      <div className="App">
        <header className="App-header">
        {
          itemList.map(i => (
            <div key={i.id}>
              <Item item={i}></Item>
            </div>
          ))
        }    
        </header>
      </div>
    );
  }else{
    return (
      <div className='App-header'>
        NO ITEM !!!
      </div>
    )
  }
}

function Item({item}) {

  const [value, setValue] = useState(0)

  useEffect(() => {
    setInterval(updateCount, 1000)
  })

  const updateCount = async () => {
    const response = await fetch(`${baseURL}/room/${item.id}/value`);
    response.json().then((data) => setValue(data.value));
  };

  if(item){
    return (
      <div>
        <img src={'https://media.istockphoto.com/photos/trees-forming-a-heart-picture-id537373196?k=20&m=537373196&s=612x612&w=0&h=Y6zpQNFrhLp9lusVP5xbJ8s6H9i0hOZlQwhhPxHlGXU='} className="image"/>
        <div>name = {item.title}</div>
        <div>count = {value}</div>
      </div>
    )
  }
}

export default App;
