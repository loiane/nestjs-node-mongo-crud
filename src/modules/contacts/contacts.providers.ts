import { Connection } from 'mongoose';

import { ContactSchema } from './schemas/contact.schema';

export const contactsProviders = [
  {
    provide: 'ContactModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Contact', ContactSchema),
    inject: ['DbConnectionToken']
  }
];
