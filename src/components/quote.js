class Quote {
  constructor() {
    this.adapter = new QuoteAdapter();
    this.getQuote();
  }

  getQuote() {
    this.adapter.getRandomQuote();
  }
}
