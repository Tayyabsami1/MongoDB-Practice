import Item from '../Models/Item.js';
import mongoose from 'mongoose';

// 1. insertOne - Insert a single document
export const insertOne = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 2. insertMany - Insert multiple documents
export const insertMany = async (req, res) => {
  try {
    const items = await Item.insertMany(req.body);
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3. find - Find documents matching a query
export const find = async (req, res) => {
  try {
    const { query = {} } = req.body;
    
    // Parse the query if it's a string
    const parsedQuery = typeof query === 'string' ? JSON.parse(query) : query;
    
    const items = await Item.find(parsedQuery);
      
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 4. findOne - Find the first document matching a query
export const findOne = async (req, res) => {
  try {
    const item = await Item.findOne(req.body);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 5. find().limit() - Limit the number of documents
export const findLimit = async (req, res) => {
  try {
    const { query = {}, limit = 5 } = req.body;
    
    // Parse the query if it's a string
    const parsedQuery = typeof query === 'string' ? JSON.parse(query) : query;
    
    const items = await Item.find(parsedQuery)
      .limit(Number(limit));
      
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 6. find().skip() - Skip a number of documents (pagination)
export const findSkip = async (req, res) => {
  try {
    const { query = {}, skip = 0 } = req.body;
    
    // Parse the query if it's a string
    const parsedQuery = typeof query === 'string' ? JSON.parse(query) : query;
    
    const items = await Item.find(parsedQuery)
      .skip(Number(skip));
      
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 7. find().sort() - Sort query results
export const findSort = async (req, res) => {
  try {
    const { query = {}, sort = { _id: 1 } } = req.body;
    
    // Parse the query and sort if they're strings
    const parsedQuery = typeof query === 'string' ? JSON.parse(query) : query;
    const parsedSort = typeof sort === 'string' ? JSON.parse(sort) : sort;
    
    const items = await Item.find(parsedQuery)
      .sort(parsedSort);
      
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 8. distinct - Return distinct values for a field
export const distinct = async (req, res) => {
  try {
    const { field } = req.params;
    const distinctValues = await Item.distinct(field);
    res.status(200).json(distinctValues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 9. countDocuments - Count the number of matching documents
export const countDocuments = async (req, res) => {
  try {
    const count = await Item.countDocuments(req.body);
    res.status(200).json({ count });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 10. updateOne - Update the first matching document
export const updateOne = async (req, res) => {
  try {
    const { filter, update } = req.body;
    const result = await Item.updateOne(filter, update);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 11. updateMany - Update multiple matching documents
export const updateMany = async (req, res) => {
  try {
    const { filter, update } = req.body;
    const result = await Item.updateMany(filter, update);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 12. replaceOne - Replace an entire document
export const replaceOne = async (req, res) => {
  try {
    const { filter, replacement } = req.body;
    const result = await Item.replaceOne(filter, replacement);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 13. deleteOne - Delete a single document
export const deleteOne = async (req, res) => {
  try {
    const result = await Item.deleteOne(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 14. deleteMany - Delete multiple documents
export const deleteMany = async (req, res) => {
  try {
    const result = await Item.deleteMany(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 15. aggregate - Perform aggregation operations
export const aggregate = async (req, res) => {
  try {
    const pipeline = req.body;
    const result = await Item.aggregate(pipeline);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 16. createIndex - Create an index
export const createIndex = async (req, res) => {
  try {
    const { fields, options } = req.body;
    const result = await Item.collection.createIndex(fields, options);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 17. dropIndex - Drop an index
export const dropIndex = async (req, res) => {
  try {
    const { indexName } = req.body;
    const result = await Item.collection.dropIndex(indexName);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 18. getIndexes - List all indexes
export const getIndexes = async (req, res) => {
  try {
    const indexes = await Item.collection.indexes();
    res.status(200).json(indexes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 19. findOneAndUpdate - Find and update a document atomically
export const findOneAndUpdate = async (req, res) => {
  try {
    const { filter, update, options = { returnDocument: 'after' } } = req.body;
    const result = await Item.findOneAndUpdate(filter, update, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 20. findOneAndDelete - Find and delete a document
export const findOneAndDelete = async (req, res) => {
  try {
    const result = await Item.findOneAndDelete(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 21. bulkWrite - Perform bulk write operations
export const bulkWrite = async (req, res) => {
  try {
    const operations = req.body;
    const result = await Item.bulkWrite(operations);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 22. findOneAndReplace - Find and replace a document
export const findOneAndReplace = async (req, res) => {
  try {
    const { filter, replacement, options = { returnDocument: 'after' } } = req.body;
    const result = await Item.findOneAndReplace(filter, replacement, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 23. renameCollection - Rename a collection
export const renameCollection = async (req, res) => {
  try {
    const { newName } = req.body;
    if (!newName) {
      return res.status(400).json({ message: 'New collection name is required' });
    }
    
    const result = await mongoose.connection.db.collection('items').rename(newName);
    res.status(200).json({ 
      message: `Collection renamed to ${newName} successfully`,
      result
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 24. drop - Drop an entire collection
export const dropCollection = async (req, res) => {
  try {
    // In a real application, you might want additional confirmation
    // and perhaps use a different collection for demo purposes
    const result = await mongoose.connection.db.collection('items').drop();
    res.status(200).json({ 
      message: 'Collection dropped successfully',
      result
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 25. listCollections - List all collections in the database
export const listCollections = async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.status(200).json(collections);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all data for the simple listing
export const getAll = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};