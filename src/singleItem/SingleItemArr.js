import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import JsonItem from '../jsonItem/JsonItem';

function SingleItemArr({item}) {

  const [open, setOpen] = useState(false);

  return (  
    <div className="SingleItemArr">
        <Button onClick={() => setOpen(!open)} aria-controls="child-fade-text" aria-expanded={open}></Button>[] {item.length ? <span>{item.length}</span>: <span>Empty</span>}
        <Collapse in={open} >
            <div id="child-collapse-text">
              {item ? item.map((childItem, i) => typeof(childItem)==='object' ? <JsonItem key={i} item={childItem}/> : Array.isArray(childItem) ? <SingleItemArr key={i} item={childItem}/>: <span key={i}>childItem</span>): null}
            </div>
        </Collapse>
    </div>
  );
}

export default SingleItemArr;
