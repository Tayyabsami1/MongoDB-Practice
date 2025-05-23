import { useState } from 'react';
import './App.css';
import MongoDBOperations from './components/MongoDBOperations';
import DataDisplay from './components/DataDisplay';
import Header from './components/Header';

function App() {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <MongoDBOperations 
          setSelectedOperation={setSelectedOperation} 
          selectedOperation={selectedOperation}
          setResult={setResult}
          setLoading={setLoading}
        />
        <DataDisplay 
          result={result} 
          selectedOperation={selectedOperation}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
