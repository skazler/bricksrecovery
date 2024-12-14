import React from "react";
import "./../styles.css";

interface QuoteProps {
  text: string; // quote text
  author?: string; // author of the quote
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <blockquote className="quote">
      <p className="quote-text">"{text}"</p>
      {author && <footer className="quote-author">— {author}</footer>}
    </blockquote>
  );
};

export default Quote;
