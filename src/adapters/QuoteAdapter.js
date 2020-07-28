class QuoteAdapter {
  constructor() {
    this.baseURL = '';
  }

  getRandomQuote() {
    return fetch(this.baseURL);
  }
}

// Fetch random quote on quote api
