import { useState, useEffect } from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/quotes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch quotes");
        return res.json();
      })
      .then((data) => setQuotes(data.quotes))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
}
