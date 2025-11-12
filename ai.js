// Replace with your actual quotes and author data
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  ];
  
  const quoteText = document.getElementById("quote-text");
  const authorText = document.getElementById("author-text");
  const newQuoteButton = document.getElementById("new-quote");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    authorText.textContent = `- ${quote.author}`;
  }
  
  displayQuote();
  
  newQuoteButton.addEventListener("click", displayQuote);