import newsletter from './newsletter.rss';
import React, { useEffect, useState } from 'react';

const XMLViewer = () => {
  const [xmlData, setXmlData] = useState('');

  useEffect(() => {
    fetch(newsletter)
      .then(response => response.text())
      .then(data => setXmlData(data));
  }, []);

  return (
    <div>
      <pre>{xmlData}</pre>
    </div>
  );
};

export default XMLViewer;
