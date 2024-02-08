import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import './App.css';
const App = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data);
      setError('');
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError('Failed to fetch quote. Please try again later.');
    }
  };

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      {quote && <QuoteBox quote={quote} />}
    </div>
  );
};

export default App;
