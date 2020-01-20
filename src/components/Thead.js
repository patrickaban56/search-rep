import React, { useState  }from 'react';
import Ancla from './Buttons/Ancla';
import Window from './Window';


export const Thead = (props) => {

    return (
    <thead>
        <tr>
        <th>#</th>
        <th>Name Repository</th>
        <th>Autor</th>
        </tr>
  </thead>
    )
}

export const Tbody = (props) => {

  

  const [show, setShow] = useState(false);

 

  function showModal (e)  {
    e.preventDefault();
    setShow(true)
    
  }
  
  
  function closeModal ()  {
    setShow(false)
   
    
  }

    return(
     
    <tr>
      <td>{props.id}</td>
      <td>{<Ancla href="*"  onClick = {showModal} >{props.name}
      <Window
      title={props.name}
      show = {show}
      showModal = {showModal}
      closeModal = {closeModal}
      description = {props.description}
      language = {props.language}
      created_at = {props.created_at}

      />
      </Ancla>}</td>
      <td>{props.autor}</td>
    </tr>
    )
}
