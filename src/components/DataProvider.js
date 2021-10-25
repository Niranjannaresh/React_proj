import React, {useState, useEffect, createContext}from 'react'

export const DataContaxt =createContext();
export const DataProvider =(props)=> {
    const [todos, setTodos]= useState([
        {name:"cooking", complete:false},
        {name:"plaing", complete:true}
    ])



    return (
        <DataContaxt.Provider values={[todos, setTodos]}>
            {props.children}
        </DataContaxt.Provider>
    )
}
