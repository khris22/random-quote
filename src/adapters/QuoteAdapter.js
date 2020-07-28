class QuoteAdapter {
  constructor() {
    this.baseURL = 'https://api.quotable.io/random';
  }

  async getRandomQuote() {
    return await fetch(this.baseURL).then((response) => response.json());
  }
}

// Fetch random quote on quote api
