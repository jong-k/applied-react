export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface QuoteWithTimestamp extends Quote {
  loadedAt: Date;
}