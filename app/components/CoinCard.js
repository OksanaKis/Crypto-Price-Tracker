export default function CoinCard({ coin }) {
    return (
      <div className="coin-card">
        <h3>{coin.name}</h3>
        <p>${coin.price.toFixed(2)}</p>
        <p className={coin.change >= 0 ? 'positive' : 'negative'}>
          {coin.change.toFixed(2)}% (24h)
        </p>
        <style jsx>{`
          .coin-card {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 8px;
          }
          .positive { color: green; }
          .negative { color: red; }
        `}</style>
      </div>
    );
  }