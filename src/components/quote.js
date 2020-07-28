class Quote {
  constructor() {
    this.adapter = new QuoteAdapter();
    this.getQuote();
    this.initBindingAndEventListeners();
  }

  initBindingAndEventListeners() {
    // this.quoteContent = document.querySelector('#quote-content');
    this.quoteParagraph = document.querySelector('#quote-paragraph');
    this.quoteAuthor = document.querySelector('#quote-author');
    this.getButton = document
      .querySelector('#new-quote-button')
      .addEventListener('click', this.getQuote.bind(this));
  }

  getQuote() {
    this.adapter.getRandomQuote().then((quote) => {
      this.quoteParagraph.innerText = quote.content;
      this.quoteAuthor.innerText = '~ ' + quote.author;
    });
  }
}
