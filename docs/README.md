# Create Docusaurus project 
npx create-docusaurus@latest docs classic
cd docs

<!-- docs/docs/intro.md -->
---
id: intro
title: Crypto Price Tracker Documentation
---

## Overview

This documentation covers the Crypto Price Tracker, a Next.js application that displays real-time cryptocurrency prices using the CoinGecko API, with state management handled by Zustand. The app features a modular component structure, search functionality, and manual refresh capabilities.

## Project Setup Guide

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation Steps
1. **Clone the Repository**
   ```bash
   [git clone] (https://github.com/OksanaKis/Crypto-Price-Tracker.git)

### Install Dependencies
* npm install
  Required packages:
  next
  react
  zustand (for state management)
  Run the Application
  npm run dev

 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Documentation Setup
Navigate to the docs folder:

cd ../docs
Install dependencies:

npm install
Start the documentation site:
npm start
 Open [http://localhost:3001](http://localhost:3001) in your browser.
### API Integration
* Endpoint
```bash
URL: (https://api.coingecko.com/api/v3/coins/markets)
Parameters: (?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano,solana)
Purpose: Fetches current prices for Bitcoin, Ethereum, BNB, Cardano, and Solana in USD.
Implementation
Location: /web-app/store/store.js
Process:
The fetchPrices function uses the native fetch API to request data.
Data is transformed into a simplified format:
id: Coin identifier
name: Coin name
price: Current price
change: 24-hour price change percentage
Transformed data updates both prices and filteredPrices in the Zustand store.
Error Handling:
Try/catch block catches fetch errors
Errors are logged to the console
Loading state is reset regardless of success or failure
Component Structure
File Structure

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
Components Breakdown
RootLayout (/app/layout.js)
Defines the basic HTML structure for the app
Wraps all page content
Home (/app/page.js)
Marked as a client component with 'use client'
Renders the CryptoDashboard component within a <main> tag
CryptoDashboard (/components/CryptoDashboard.js)
Main container component
Uses useEffect to trigger initial price fetch
Composes SearchBar, RefreshButton, and PriceGrid
Displays a loading message when data is being fetched
Styles: Container layout, controls flexbox, centered loader
SearchBar (/components/SearchBar.js)
Manages local search term state with useState
Updates the store’s filtered prices via setSearch
Styled input with fixed width and basic border
PriceGrid (/components/PriceGrid.js)
Displays a responsive grid of CoinCard components
Uses filteredPrices from the store
Styles: CSS Grid with auto-fit columns
CoinCard (/components/CoinCard.js)
Renders individual coin data (name, price, 24h change)
Applies conditional styling for positive/negative changes
Styles: Card layout with border and padding
RefreshButton (/components/RefreshButton.js)
Triggers fetchPrices on click
Disables itself during loading
Shows "Refreshing..." text when loading
Styles: Blue button with loading state cursor
State Management
Zustand Store
File: /crypto-price-tracker/store/store.js
Implementation:
import { create } from 'zustand';

const useStore = create((set, get) => ({
  prices: [],           // Stores all fetched prices
  filteredPrices: [],   // Stores search-filtered prices
  loading: false,       // Tracks fetch status
  fetchPrices: async () => { /* Fetch and format data */ },
  setSearch: (searchTerm) => { /* Filter prices */ }
}));


Store Details
State:
prices: Array of all cryptocurrency data
filteredPrices: Array of filtered data based on search
loading: Boolean indicating fetch in progress

Actions:
fetchPrices: Async function to fetch and format API data
setSearch: Filters prices based on search term and updates filteredPrices
Usage: Imported and used directly in client components

