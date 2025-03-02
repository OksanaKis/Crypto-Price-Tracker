<!-- docs/docs/intro.md -->
---
id: intro
title: Crypto Price Tracker Documentation
---

## Project Setup

### Web App (Next.js)
1. Navigate to `cd ..`
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

### Documentation (Docusaurus)
1. Navigate to `/docs`
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3001`

## API Integration

- Using CoinGecko API: `https://api.coingecko.com/api/v3/coins/markets`
- Fetches prices for Bitcoin, Ethereum, BNB, Cardano, and Solana
- Data stored in Zustand store
- Basic error handling with try/catch

## State Management

- Chose Zustand for state management because:
  - Simple API and minimal boilerplate
  - Easy to integrate with async operations
  - Lightweight and performant
  - Centralized state management
- Local state with useState for search filtering
- Store contains cryptos array, loading state, and fetch function

## Challenges & Solutions

1. **Challenge**: Initial data loading
   - **Solution**: Used useEffect for initial fetch

2. **Challenge**: Responsive design
   - **Solution**: Used CSS Grid with auto-fit minmax pattern

3. **Challenge**: State persistence
   - **Solution**: Zustand store maintains state across renders


<!-- ---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->
