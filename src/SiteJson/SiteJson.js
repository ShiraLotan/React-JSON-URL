import React, { useState, useEffect } from 'react';
import JsonItem from '../jsonItem/JsonItem';

function SiteJson({jsonData}) {

  return (  
    <div className="SiteJson">
        {jsonData ? jsonData.map((item, i)=>  <JsonItem key={i} item={item}/>): null}
    </div>
  );
}

export default SiteJson;
