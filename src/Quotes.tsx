import { useState, useEffect } from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes));
  }, []);

  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.id}>{quote.quote}</li>
      ))}
    </ul>
  );
}
