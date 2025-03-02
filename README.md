# Crypto-Price-Tracker
Welcome to Next.js Project
This documentation covers the Crypto Price Tracker, a Next.js application that displays real-time cryptocurrency prices using the CoinGecko API, with state management handled by Zustand. The app features a modular component structure, search functionality, and manual refresh capabilities.

/crypto-price-tracker
  /app
    layout.js         # Root HTML structure
    page.js          # Application entry point
  /components
    CryptoDashboard.js # Main dashboard component
    SearchBar.js      # Search input component
    PriceGrid.js      # Grid display component
    CoinCard.js       # Individual coin card
    RefreshButton.js  # Refresh button component
  /store
    store.js         # Zustand state management


# Installation Steps
1. **Clone the Repository**
   ```bash
   [git clone] (https://github.com/OksanaKis/Crypto-Price-Tracker.git)

## Install Dependencies
```bash
npm install
Required packages:
next
react
zustand (for state management)
First, run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   
### Documentation Setup
Navigate to the docs folder:

```bash
cd ../docs
npm start







