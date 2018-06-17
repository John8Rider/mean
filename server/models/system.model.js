const mongoose = require('mongoose');

const SystemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  platform: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entity',
    required: true
  },
  equipment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entity',
  }],
  status: {
    required: true,
    type: String,
    default: 'draft',
    enum: ['draft', 'reviewed', 'needs review', 'active', 'waiting', 'approved', 'rejected']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('System', SystemSchema);
