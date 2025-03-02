import { create } from 'zustand';


const useStore = create((set, get) => ({
  prices: [],
  filteredPrices: [],
  loading: false,
  fetchPrices: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano,solana'
      );
      const data = await response.json();
      
      const formattedPrices = data.map(coin => ({
        id: coin.id,
        name: coin.name,
        price: coin.current_price,
        change: coin.price_change_percentage_24h
      }));
      
      set({ 
        prices: formattedPrices,
        filteredPrices: formattedPrices 
      });
    } catch (error) {
      console.error('Error fetching prices:', error);
    } finally {
      set({ loading: false });
    }
  },
  setSearch: (searchTerm) => {
    const filtered = get().prices.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredPrices: filtered });
  }
}));

export default useStore;