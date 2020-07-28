class QuoteAdapter {
  constructor() {
    this.baseURL = 'https://api.quotable.io/random';
  }

  getRandomQuote() {
    return fetch(this.baseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(`${data.content} - ${data.author}`);
      });
  }
}

// Fetch random quote on quote api
