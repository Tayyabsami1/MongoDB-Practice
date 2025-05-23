import React from 'react';
import './DataDisplay.css';

const DataDisplay = ({ result, selectedOperation, loading }) => {
  const formatJSON = (data) => {
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(formatJSON(result));
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="data-display">
      <div className="display-header">
        <h2>Response</h2>
        {result && (
          <button onClick={copyToClipboard} className="copy-btn">
            Copy
          </button>
        )}
      </div>

      <div className="result-container">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : result ? (
          <pre className="result-content">{formatJSON(result)}</pre>
        ) : (
          <div className="no-result">
            <p>Execute an operation to see results</p>
          </div>
        )}
      </div>
      
      {selectedOperation && (
        <div className="operation-info">
          <h3>Operation: {selectedOperation.name}</h3>
          <p>{selectedOperation.description}</p>
          {selectedOperation.method === 'POST' && (
            <div className="example-container">
              <h4>Example Request:</h4>
              <pre>{selectedOperation.example || 'No example available'}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataDisplay;