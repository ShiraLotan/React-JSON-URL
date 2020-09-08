import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import SingleItemArr from '../singleItem/SingleItemArr';
import './JsonItem.css';

function JsonItem({item, isParent}) {
  
    const [open, setOpen] = useState(false);
    const [arr, setArr] = useState(false);
    const [objKey , setObjKey ] = useState([]);
    const [objVal , setObjVal ] = useState([]);

    useEffect(() => {
            if(!item.length){
                const propertyNames = Object.keys(item);
                const propertyVal = Object.values(item).map(v => !v ? `${v}`: v===true ? `${v}`: v);
                const valueToString = handleObjectValues(propertyVal)

                setObjVal(valueToString);
                setObjKey(propertyNames);

            }else{
                const adjustArr = item.map(v => !v ? `${v}`: v===true ? `${v}`: v);
                const setValues = handleObjectValues(adjustArr);
                
                setObjVal([]);
                setObjVal(setValues);
                setArr(true);
            }
    }, [item]);

    const handleObjectValues = (list) => {
       return list.map(item=>{
            let setItem;
            if(item){
                if(typeof(item) !=="object" && !Array.isArray(item)){
                    setItem = item + '';
                }
                setItem = item;
            }
            return setItem;
        });}
  
  return (  

    <div className="JsonItem">
{!open ? 
            <svg onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
            </svg>
 :  
            <svg onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
}
            {isParent? <span className="object-id">{item.id}</span>: !arr ? <span className="object-note">Object</span>: <span className="array-note">Array</span>}
         
         <Collapse in={open} >
            <div id="example-collapse-text">
                {arr ? objVal.map((singarr, i) => <div key={i}>{singarr},</div>): null}
                {objKey.map((singleKey, i) => <div className="obj-key" key={i}>{singleKey} : { objVal.map((singleItem, y)=> (i===y ? (typeof(singleItem) !=="object" && !Array.isArray(singleItem)) ? <span className="obj-val" key={y}>{singleItem}</span>: (Array.isArray(singleItem) && !arr ? <SingleItemArr key={y} item={singleItem}/>: <JsonItem key={y} item={singleItem}/>): null))}</div>)}
            </div>
        </Collapse>
    </div>
  );
}

export default JsonItem;
