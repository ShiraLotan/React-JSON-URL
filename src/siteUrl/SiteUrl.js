import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
function SiteUrl({handleUrl}) {
  
  return (  
    <div className="SiteUrl">
      <h1>Enter your site: </h1>
      <InputGroup size="lg">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-lg">Enter URL to fetch JSON</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl name="url" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>handleUrl(e.target.value)}/>
    </InputGroup>
    </div>
  );
}

export default SiteUrl;
