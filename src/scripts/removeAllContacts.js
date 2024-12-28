import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  let allContacts = await readContacts();

  allContacts = [];

  fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));

  return allContacts;
};

removeAllContacts();
