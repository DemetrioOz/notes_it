// import { v4 as uuidv4 } from 'uuid';
// import { openDb } from '@/app/database/connection';
// pages/api/notes.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/app/database/connection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await openDb();
      const notes = await db.all('SELECT * FROM notes');
      await db.close();
      res.status(200).json(notes);
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
      res.status(500).json({ error: 'Erro ao buscar notas' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, content } = req.body;
      const db = await openDb();
      const result = await db.run('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content]);
      const newNoteId = result.lastID;
      await db.close();
      res.status(201).json({ id: newNoteId, title, content });
    } catch (error) {
      console.error('Erro ao salvar nota:', error);
      res.status(500).json({ error: 'Erro ao salvar nota' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}


// const newNote = { 
//     id: uuid,
//     title: data.title,
//     isService: data.isService,
//     called: data.called,
//     content: data.content
// };