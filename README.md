# Adyen Connection Example

This project demonstrates a simple setup for connecting an Adyen account using a static site and a minimal Node HTTP server.

## Setup

1. Replace `YOUR_ADYEN_CLIENT_KEY` in `index.html` with your real Adyen client key.
2. Implement the API calls in `server.js` for `/api/paymentMethods` and `/api/makePayment` using your Adyen API credentials.
3. Start the server:
   ```bash
   node server.js
   ```
4. Open `http://localhost:3000` in your browser.

This is only a basic example to get you started. You will need to implement additional error handling and security for production use.
