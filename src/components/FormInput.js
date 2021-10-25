import React from 'react'
import { useState } from 'react/cjs/react.development'
import Todo from './Todo';

export default function FormInput() {

  const [items, setItems] = useState([]);
  
  const [inputList, setInputList] = useState(" ")
  const listOfItems = () => {
    setItems((oldVal) => {
      return[...oldVal, inputList]; 
      
    })
    setInputList(' ');
  };

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };


  const  DelItem=(id)=>{
    console.log("i am deleted");
    setItems((oldVal)=>{
      return oldVal.filter((arrEle, index)=>{
        return index !== id;
      })

    })
}
  return (
    <>
      <input type="text" placeholder="What ou want to do?" value={inputList} onChange={itemEvent} />
      <button onClick={listOfItems}>Add</button>
      <ul>
        
        {items.map((itemval, index) => {
            return( 
              <Todo
                key = {index}
                id={index}
                text={itemval}
                onSelect={DelItem}
            />);

          })
        }
      </ul>
    </>
  )
}
