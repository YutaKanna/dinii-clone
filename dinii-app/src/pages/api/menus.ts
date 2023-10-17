// pages/api/menus.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../app/db';
import Menu from '../../app/models/Menu';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const menus = await Menu.find();
      res.status(200).json(menus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).end();
  }
};