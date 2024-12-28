import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i += 1) {
    let contact = createFakeContact();
    contacts.push(contact);
  }

  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  return contacts;
};

generateContacts(2);
