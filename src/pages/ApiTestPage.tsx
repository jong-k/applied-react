import { api } from "../api/axios";
import { useState } from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
  loadedAt: Date;
}

export default function ApiTestPage() {
  const [quoteList, setQuoteList] = useState<Quote[]>([]);

  const getRandomQuote = async () => {
    try {
      const res = await api.get("https://dummyjson.com/quotes/random");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const saveQuote = async () => {
    try {
      const quote = await getRandomQuote();
      setQuoteList((prev) => [...prev, { ...quote, loadedAt: new Date() }]);
    } catch (err) {
      console.log(err);
    }
  };

  // 5번 연속 빠르게 랜덤 속담 얻기
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
