import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
//import db from "./db.json";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered transactions:', filteredTransactions); // this for debugging
  console.log("emmanjdf");

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
