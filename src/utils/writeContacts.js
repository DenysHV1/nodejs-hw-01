import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

import { readContacts } from './readContacts.js';
// import { createFakeContact } from './createFakeContact.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  const newContact = {
    ...updatedContacts,
  };
  contacts.push(newContact);
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  return newContact;
};
