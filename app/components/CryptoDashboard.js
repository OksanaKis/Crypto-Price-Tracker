'use client'
import { useEffect } from 'react';
import useStore from '../store/store';
import SearchBar from './SearchBar';
import PriceGrid from './PriceGrid';
import RefreshButton from './RefreshButton';

export default function CryptoDashboard() {
  const { loading, fetchPrices } = useStore();

  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      
      <div className="controls">
        <SearchBar />
        <RefreshButton />
      </div>

      {loading && <div className="loader">Loading...</div>}
      <PriceGrid />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .controls {
          margin: 20px 0;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .loader {
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}