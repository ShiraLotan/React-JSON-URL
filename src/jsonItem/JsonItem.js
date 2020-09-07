import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function JsonItem({item}) {
  
    const [open, setOpen] = useState(false);
    const [objKey , setObjKey ] = useState([]);
    const [objVal , setObjVal ] = useState([]);

    useEffect(() => {
        if(typeof(item)==='object'){
                const propertyNames = Object.keys(item);
                const propertyVal = Object.values(item);
                const valueToString = propertyVal.map(item=> item.toString());
        
                setObjKey(propertyNames);
                setObjVal(valueToString);
        }else{
            console.log(item)
        }
        

    }, [item]);

  
  return (  

    <div className="JsonItem">
         <Button onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}></Button>{item.id}

         <Collapse in={open} >
            <div id="example-collapse-text">
                {objKey.map((singleKey, i) => <div key={i}>{singleKey}:{objVal.filter((val, y)=> y==i ? <span>{val}</span> : null)}</div>)}
            </div>
        </Collapse>
    </div>
  );
}

export default JsonItem;
