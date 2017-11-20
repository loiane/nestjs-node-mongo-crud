import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    email: String,
    phone: String
  },
  {
    collection: 'contacts',
    read: 'nearest'
  }
);
