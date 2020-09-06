import React, { useState, useEffect } from 'react';
import JSONTree from 'react-json-tree';
import theme from '../themeStyle/ThemeStyle';

function SiteJson({jsonData}) {
  
  return (  
    <div className="SiteJson">
        <JSONTree theme={theme} data={jsonData} invertTheme={true} /> 
    </div>
  );
}

export default SiteJson;
