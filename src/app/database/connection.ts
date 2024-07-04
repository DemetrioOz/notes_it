// db.ts

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database;

export async function openDb() {
  if (!db) {
    db = await open({
      filename: './database.sqlite', // Caminho para o arquivo SQLite
      driver: sqlite3.Database
    });
  }
  return db;
}
