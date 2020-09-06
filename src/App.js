import React, { useState, useEffect } from 'react';
import SiteJson from './SiteJson/SiteJson';
import SiteUrl from './siteUrl/SiteUrl';
import './App.css';
import ErrorUrl from './errorUrl/ErrorUrl';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function App() {
  const [jsonDate, setJson] = useState('');
  const [siteUrl, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(siteUrl,{
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        const json = await res.json();
        setError(false);
        setLoading(false);
        setJson(json);
      }catch(error){
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [siteUrl]);

  return (  
    <div className="App">
      <Container >
        <SiteUrl handleUrl={(url)=>{
          setUrl(url);
          setLoading(true);
        }}/>
        {error && siteUrl.length ? <ErrorUrl/>: isLoading ? 
        <Spinner animation="border" variant="primary" /> 
        : <SiteJson jsonData={jsonDate}/> }
      </Container>
    </div>
  );
}

export default App;
