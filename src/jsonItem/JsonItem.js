import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import SingleItemArr from '../singleItem/SingleItemArr';

function JsonItem({item}) {
  
    const [open, setOpen] = useState(false);
    const [objKey , setObjKey ] = useState([]);
    const [objVal , setObjVal ] = useState([]);

    useEffect(() => {
                const propertyNames = Object.keys(item);
                const propertyVal = Object.values(item);

                const valueToString = propertyVal.map(item=>{
                    if(item){
                        if(typeof(item) !=="object" && !Array.isArray(item)){
                            return item.toString();
                        }
                        return item;
                    }
                });
        
                setObjKey(propertyNames);
                setObjVal(valueToString);
   
    }, [item]);

  
  return (  

    <div className="JsonItem">
         <Button onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}></Button>{item.id}

         <Collapse in={open} >
            <div id="example-collapse-text">
                {objKey.map((singleKey, i) => <div key={i}>{singleKey} : {objVal.map((item, y)=> (i===y ? (typeof(item) !=="object" && !Array.isArray(item)) ? <span key={y}>{item}</span>: (Array.isArray(item) ? <SingleItemArr key={y} item={item}/>: <JsonItem key={y} item={item}/>): null))}</div>)}
            </div>
        </Collapse>
    </div>
  );
}

export default JsonItem;
