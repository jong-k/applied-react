import { useState, useEffect } from "react";
import { quotesApi } from "../api";
import type { Quote } from "../types";

export default function QuotesList() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    quotesApi
      .getQuotes()
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
