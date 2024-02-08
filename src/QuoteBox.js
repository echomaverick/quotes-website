import React from 'react';

const QuoteBox = ({ quote }) => {
  return (
    <div className="quote-box">
      <blockquote>{quote.content}</blockquote>
      <p className="author">- {quote.author}</p>
    </div>
  );
};

export default QuoteBox;
