import useStore from '../store/store';

export default function RefreshButton() {
  const { loading, fetchPrices } = useStore();
  
  return (
    <button
      onClick={fetchPrices}
      disabled={loading}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        background: '#0070f3',
        color: 'white',
        border: 'none',
        cursor: loading ? 'not-allowed' : 'pointer'
      }}
    >
      {loading ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}