import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const allContacts = await readContacts();
  const lastIndex = allContacts.length - 1;
  const lastContact = allContacts[lastIndex];
  allContacts.pop();

  fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));

  return lastContact;
};

removeLastContact().then((lastContact) => console.log(lastContact));
