import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import IUserDocument from '../interfaces/IUserDocument';

interface IUser extends IUserDocument {
  method: 'save';
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre<IUser>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export default model<IUser>('User', UserSchema);
