import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  active: {
    type: Boolean,
    default: true
  },
  minor: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;