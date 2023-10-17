// models/Menu.ts
import mongoose, { Document } from 'mongoose';

export interface IMenu extends Document {
  name: string;
  price: number;
}

const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.models.Menu || mongoose.model<IMenu>('Menu', menuSchema);