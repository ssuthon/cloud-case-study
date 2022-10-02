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
    response.json().then((res) => setItemList(res.data));
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

function Item(props) {

  const [item, setItem] = useState(null)

  useEffect(() => {
    setItem(props.item)
  })

  const incCount = async (id) => {
    const response = await fetch(`${baseURL}/room/${id}/value`);
    response.json().then((res) => setItem(res.data.value));
    console.log(item);
  };

  if(item){
    return (
      <div>
        <img src={'https://media.istockphoto.com/photos/trees-forming-a-heart-picture-id537373196?k=20&m=537373196&s=612x612&w=0&h=Y6zpQNFrhLp9lusVP5xbJ8s6H9i0hOZlQwhhPxHlGXU='} className="image"/>
        <div>name = {item.title}</div>
        <div>count = {item.count}</div>
        {/* <button onClick=incCount(item.id)}>Click</button> */}
      </div>
    )
  }
}

export default App;
