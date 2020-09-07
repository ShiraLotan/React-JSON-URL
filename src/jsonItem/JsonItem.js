import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import SingleItemArr from '../singleItem/SingleItemArr';
import './JsonItem.css';

function JsonItem({item, isParent}) {
  
    const [open, setOpen] = useState(false);
    const [objKey , setObjKey ] = useState([]);
    const [objVal , setObjVal ] = useState([]);

    useEffect(() => {
                const propertyNames = Object.keys(item);
                const propertyVal = Object.values(item);

                const valueToString = propertyVal.map(item=>{
                    let setItem;
                    if(item){
                        if(typeof(item) !=="object" && !Array.isArray(item)){
                            setItem = item.toString();
                        }
                        setItem = item;
                    }
                    return setItem;
                });
        
                setObjKey(propertyNames);
                setObjVal(valueToString);
   
    }, [item]);

  
  return (  

    <div className="JsonItem">
            <svg onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>{isParent? <span className="object-id">{item.id}</span>: <span className="object-note">Object</span>}

         <Collapse in={open} >
            <div id="example-collapse-text">
                {objKey.map((singleKey, i) => <div className="obj-key" key={i}>{singleKey} : { objVal.map((item, y)=> (i===y ? (typeof(item) !=="object" && !Array.isArray(item)) ? <span className="obj-val" key={y}>{item}</span>: (Array.isArray(item) ? <SingleItemArr key={y} item={item}/>: <JsonItem key={y} item={item}/>): null))}</div>)}
            </div>
        </Collapse>
    </div>
  );
}

export default JsonItem;
