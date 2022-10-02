import './App.css';
import React, { useEffect, useState } from "react";
import conf from './config';

function App() {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItemList()
  })

  const getItemList = async () => {
    const response = await fetch(`${conf.apiPrefix}/room`);
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
    const response = await fetch(`${conf.apiPrefix}/room/${item.id}/value`);
    response.json().then((data) => setValue(data.value));
  };

  if(item){
    return (
      <div>
        <img src={`${conf.imgPrefix}/${item.image}`} className="image"/>
        <div>name = {item.title}</div>
        <div>count = {value}</div>
      </div>
    )
  }
}

export default App;
