import useStore from '../store/store';
import CoinCard from './CoinCard';

export default function PriceGrid() {
  const { filteredPrices } = useStore();

  return (
    <div className="price-grid">
      {filteredPrices.map(coin => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
      <style jsx>{`
        .price-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
      `}</style>
    </div>
  );
}