import { useState } from "react";
import { quotesApi } from "../api";
import type { QuoteWithTimestamp } from "../types";

export default function ApiTestQuotes() {
  const [quoteList, setQuoteList] = useState<QuoteWithTimestamp[]>([]);

  const saveQuote = async () => {
    try {
      const quote = await quotesApi.getRandomQuote();
      setQuoteList((prev) => [...prev, { ...quote, loadedAt: new Date() }]);
    } catch (err) {
      console.log(err);
    }
  };

  const save5Quote = async () => {
    for (let i = 0; i < 5; i++) {
      await saveQuote();
    }
  };

  return (
    <div>
      <h1>Api Test Page</h1>
      <button onClick={saveQuote}>랜덤 속담 얻기</button>
      <button onClick={save5Quote}>5연속 랜덤 속담 얻기</button>
      <ul>
        {quoteList.map((quote) => (
          <li key={quote.id}>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
            <p>{quote.loadedAt.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
