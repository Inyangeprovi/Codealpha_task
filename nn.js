const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-button');
const twitterShare = document.getElementById('twitter-share');
const facebookShare = document.getElementById('facebook-share');
const linkedinShare = document.getElementById('linkedin-share');

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "Life"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
        category: "Life"
    },
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
        category: "Love"
    },
    {
        text: "Love is like the wind, you can't see it but you can feel it.",
        author: "Nicholas Sparks",
        category: "Love"
    },
     {
        text: "It is sad not to love, but it is much sadder not to be able to love.",
        author: "Miguel de Unamuno",
        category: "Sad"
    },
    {
        text: "Tears are words the heart can't express.",
        author: "Gerardo Ortiz",
        category: "Sad"
    },
     {
        text: "The course of true love never did run smooth.",
        author: "William Shakespeare",
        category: "Heartbroken"
    },
    {
        text: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss",
        category: "Heartbroken"
    },
     {
        text: "God doesn't give us what we can handle, God helps us handle what we are given.",
        author: "Unknown",
        category: "God"
    },
    {
        text: "Faith is not believing that God can, it is knowing that God will.",
        author: "Unknown",
        category: "God"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        category: "Life"
    },
    {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        category: "Life"
    },
    {
        text: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        category: "Love"
    },
    {
        text: "The best proof of love is trust.",
        author: "Joyce Brothers",
        category: "Love"
    },
     {
        text: "Nothing is more sad than the death of an illusion.",
        author: "Arthur Koestler",
        category: "Sad"
    },
    {
        text: "Sadness is but a wall between two gardens.",
        author: "Kahlil Gibran",
        category: "Sad"
    },
     {
        text: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller",
        category: "Heartbroken"
    },
    {
        text: "The heart was made to be broken.",
        author: "Oscar Wilde",
        category: "Heartbroken"
    },
     {
        text: "God is most glorified in us when we are most satisfied in Him.",
        author: "John Piper",
        category: "God"
    },
    {
        text: "To fall in love with God is the greatest romance; to seek him the greatest adventure; to find him, the greatest human achievement.",
        author: "Saint Augustine",
        category: "God"
    },
    // Add more quotes here (minimum of 20) with categories
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;

    // Update social sharing links
    const tweet = encodeURIComponent(`${quote.text} - ${quote.author}`);
    twitterShare.href = `https://twitter.com/intent/tweet?text=${tweet}`;

    const facebookLink = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${facebookLink}`;

    const linkedinLink = encodeURIComponent(`${quote.text} - ${quote.author}`);
     linkedinShare.href = `https://www.linkedin.com/sharing/share-offsite/?url=${linkedinLink}`;
}

newQuoteButton.addEventListener('click', displayQuote);

// Initial quote on page load
displayQuote();
