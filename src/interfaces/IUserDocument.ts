import { Document } from 'mongoose';

export default interface IUSerDocument extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
