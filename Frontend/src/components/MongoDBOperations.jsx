import React, { useState } from 'react';
import './MongoDBOperations.css';

const MongoDBOperations = ({ setSelectedOperation, selectedOperation, setResult, setLoading }) => {
  const [inputData, setInputData] = useState('');
  const [requestType, setRequestType] = useState('GET');
  const [url, setUrl] = useState('');
  
  const operations = [
    { name: 'Get All Items', endpoint: 'items', method: 'GET', description: 'Fetch all items from the database' },
    { name: 'Insert One', endpoint: 'insertOne', method: 'POST', description: 'Insert a single document', example: '{ "name": "Alice", "age": 30, "city": "New York" }' },
    { name: 'Insert Many', endpoint: 'insertMany', method: 'POST', description: 'Insert multiple documents', example: '[{ "name": "Bob", "age": 25, "city": "Boston" }, { "name": "Charlie", "age": 35, "city": "Chicago" }]' },
    { name: 'Find', endpoint: 'find', method: 'POST', description: 'Find documents matching a query', example: '{ "query": { "age": { "$gte": 18 } }, "limit": 5, "skip": 0, "sort": { "age": -1 } }' },
    { name: 'Find One', endpoint: 'findOne', method: 'POST', description: 'Find the first document matching a query', example: '{ "name": "Alice" }' },
    { name: 'Find with Limit', endpoint: 'findLimit', method: 'POST', description: 'Limit the number of documents returned', example: '{ "query": { "active": true }, "limit": 5 }' },
    { name: 'Find with Skip', endpoint: 'findSkip', method: 'POST', description: 'Skip a number of documents (pagination)', example: '{ "query": {}, "skip": 10 }' },
    { name: 'Find with Sort', endpoint: 'findSort', method: 'POST', description: 'Sort query results', example: '{ "query": {}, "sort": { "age": -1 } }' },
    { name: 'Distinct', endpoint: 'distinct/city', method: 'GET', description: 'Return distinct values for a field' },
    { name: 'Count Documents', endpoint: 'countDocuments', method: 'POST', description: 'Count the number of matching documents', example: '{ "active": true }' },
    { name: 'Update One', endpoint: 'updateOne', method: 'POST', description: 'Update the first matching document', example: '{ "filter": { "name": "Alice" }, "update": { "$set": { "age": 31 } } }' },
    { name: 'Update Many', endpoint: 'updateMany', method: 'POST', description: 'Update multiple matching documents', example: '{ "filter": { "age": { "$lt": 18 } }, "update": { "$set": { "minor": true } } }' },
    { name: 'Replace One', endpoint: 'replaceOne', method: 'POST', description: 'Replace an entire document', example: '{ "filter": { "name": "Alice" }, "replacement": { "name": "Alice", "age": 32, "city": "San Francisco" } }' },
    { name: 'Delete One', endpoint: 'deleteOne', method: 'POST', description: 'Delete a single document', example: '{ "name": "Bob" }' },
    { name: 'Delete Many', endpoint: 'deleteMany', method: 'POST', description: 'Delete multiple documents', example: '{ "inactive": true }' },
    { name: 'Aggregate', endpoint: 'aggregate', method: 'POST', description: 'Perform aggregation operations', example: '[{ "$match": { "age": { "$gt": 18 } } }, { "$group": { "_id": "$city", "count": { "$sum": 1 } } }]' },
    { name: 'Create Index', endpoint: 'createIndex', method: 'POST', description: 'Create an index', example: '{ "fields": { "email": 1 }, "options": { "unique": true } }' },
    { name: 'Drop Index', endpoint: 'dropIndex', method: 'POST', description: 'Drop an index', example: '{ "indexName": "email_1" }' },
    { name: 'Get Indexes', endpoint: 'getIndexes', method: 'GET', description: 'List all indexes' },
    { name: 'Find One And Update', endpoint: 'findOneAndUpdate', method: 'POST', description: 'Find and update a document atomically', example: '{ "filter": { "name": "Alice" }, "update": { "$set": { "active": false } }, "options": { "returnDocument": "after" } }' },
    { name: 'Find One And Delete', endpoint: 'findOneAndDelete', method: 'POST', description: 'Find and delete a document', example: '{ "name": "Charlie" }' },
    { name: 'Bulk Write', endpoint: 'bulkWrite', method: 'POST', description: 'Perform bulk write operations', example: '[{ "insertOne": { "document": { "name": "Dan", "age": 40 } } }, { "updateOne": { "filter": { "name": "Alice" }, "update": { "$set": { "age": 33 } } } }]' },
    { name: 'Find One And Replace', endpoint: 'findOneAndReplace', method: 'POST', description: 'Find and replace a document', example: '{ "filter": { "name": "Alice" }, "replacement": { "name": "Alice", "age": 34, "city": "Miami" } }' },
    { name: 'Rename Collection', endpoint: 'renameCollection', method: 'POST', description: 'Rename a collection', example: '{ "newName": "people" }' },
    { name: 'Drop Collection', endpoint: 'dropCollection', method: 'POST', description: 'Drop an entire collection' },
    { name: 'List Collections', endpoint: 'listCollections', method: 'GET', description: 'List all collections in the database' }
  ];

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setRequestType(operation.method);
    setUrl(`http://localhost:5000/api/${operation.endpoint}`);
    
    if (operation.example) {
      setInputData(operation.example);
    } else {
      setInputData('');
    }
  };

  const handleExecute = async () => {
    setLoading(true);
    
    try {
      const options = {
        method: requestType,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      // Only add body for non-GET requests and when inputData exists
      if (requestType !== 'GET' && inputData) {
        try {
          // Try to parse the input data as JSON to ensure it's valid
          JSON.parse(inputData);
          options.body = inputData;
        } catch (err) {
          // If parsing fails, return an error
          setResult({ error: "Invalid JSON in request body" });
          setLoading(false);
          return;
        }
      }

      const response = await fetch(url, options);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mongodb-operations">
      <div className="operations-list">
        <h2>MongoDB Operations</h2>
        <div className="operations-container">
          {operations.map((operation, index) => (
            <div 
              key={index} 
              className={`operation-item ${selectedOperation && selectedOperation.name === operation.name ? 'selected' : ''}`}
              onClick={() => handleOperationSelect(operation)}
            >
              <h3>{operation.name}</h3>
              <p className="method">{operation.method}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="operation-details">
        {selectedOperation ? (
          <>
            <h2>{selectedOperation.name}</h2>
            <p className="description">{selectedOperation.description}</p>
            
            <div className="request-config">
              <div className="url-container">
                <span className="method-label">{requestType}</span>
                <input 
                  type="text" 
                  value={url} 
                  onChange={(e) => setUrl(e.target.value)}
                  className="url-input"
                />
              </div>
              
              {requestType !== 'GET' && (
                <div className="input-container">
                  <h3>Request Body</h3>
                  <textarea
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Enter JSON data..."
                    rows={10}
                  />
                </div>
              )}
              
              <button 
                className="execute-btn"
                onClick={handleExecute}
              >
                Execute
              </button>
            </div>
          </>
        ) : (
          <div className="no-selection">
            <h3>Select an operation from the list</h3>
            <p>Choose from 25 MongoDB operations to execute</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MongoDBOperations;