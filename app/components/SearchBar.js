import { useState } from 'react';
import useStore from '../store/store';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearch } = useStore(); 


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearch(e.target.value);
  };
  

  return (
    <input
      type="text"
      placeholder="Search cryptocurrencies..."
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
      style={{
        padding: '8px',
        width: '300px',
        borderRadius: '4px',
        border: '1px solid #ddd'
      }}
    />
  );
}