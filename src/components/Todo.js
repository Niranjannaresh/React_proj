import React from 'react'

const Todo = (props) => {

    return (
        <>
            <div classNameName="form-group">
                
                <li > {props.text}</li> 
                <button type="button" className="btn btn-primary" onClick ={()=>{
                    props.onSelect(props.id);
                }}>-</button>
            
            </div>

        </>
    );
};


export default Todo
