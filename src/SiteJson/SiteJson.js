import React from 'react';
import JsonItem from '../jsonItem/JsonItem';

function SiteJson({jsonData}) {

  return (  
    <div className="SiteJson">
        {jsonData.length ? jsonData.map((item, i)=>  <JsonItem key={i} item={item} isParent={true}/>): null}
    </div>
  );
}

export default SiteJson;
