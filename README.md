# Stock Price Checker

This is the boilerplate for the Stock Price Checker project. Instructions for building your project can be found at https://freecodecamp.org/learn/information-security/information-security-projects/stock-price-checker

## Setup

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. The app will be available at http://localhost:3000

## Testing

- Run functional tests: `NODE_ENV=test node server.js`
- Or use Mocha directly: `npm test` (if configured)

## API

- GET /api/stock-prices?stock=SYMBOL - Get price and likes for one stock
- GET /api/stock-prices?stock=SYMBOL&like=true - Like a stock (one per IP)
- GET /api/stock-prices?stock=SYMBOL1&stock=SYMBOL2 - Compare two stocks with relative likes
