import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import JsonItem from '../jsonItem/JsonItem';

function SingleItemArr({item}) {

  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(item)
}, [item]);

  return (  
    <div className="SingleItemArr">
        <Button onClick={() => setOpen(!open)} aria-controls="child-fade-text" aria-expanded={open}></Button>[]
        <Collapse in={open} >
            <div id="child-collapse-text">
              {item ? item.map((childItem, i) => typeof(childItem)==='object' ? <JsonItem key={i} item={childItem}/> : null): null}
            </div>
        </Collapse>
    </div>
  );
}

export default SingleItemArr;
