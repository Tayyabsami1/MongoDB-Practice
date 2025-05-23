import express from 'express';
import * as itemController from '../Controllers/itemController.js';

const router = express.Router();

// Basic CRUD operations
router.get('/items', itemController.getAll);
router.post('/insertOne', itemController.insertOne);
router.post('/insertMany', itemController.insertMany);
router.post('/find', itemController.find);
router.post('/findOne', itemController.findOne);
router.post('/findLimit', itemController.findLimit);
router.post('/findSkip', itemController.findSkip);
router.post('/findSort', itemController.findSort);
router.get('/distinct/:field', itemController.distinct);
router.post('/countDocuments', itemController.countDocuments);
router.post('/updateOne', itemController.updateOne);
router.post('/updateMany', itemController.updateMany);
router.post('/replaceOne', itemController.replaceOne);
router.post('/deleteOne', itemController.deleteOne);
router.post('/deleteMany', itemController.deleteMany);
router.post('/aggregate', itemController.aggregate);
router.post('/createIndex', itemController.createIndex);
router.post('/dropIndex', itemController.dropIndex);
router.get('/getIndexes', itemController.getIndexes);
router.post('/findOneAndUpdate', itemController.findOneAndUpdate);
router.post('/findOneAndDelete', itemController.findOneAndDelete);
router.post('/bulkWrite', itemController.bulkWrite);
router.post('/findOneAndReplace', itemController.findOneAndReplace);
router.post('/renameCollection', itemController.renameCollection);
router.post('/dropCollection', itemController.dropCollection);
router.get('/listCollections', itemController.listCollections);

export default router;