import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { ContactsController } from './contacts.controller';
import { contactsProviders } from './contacts.providers';
import { ContactsService } from './contacts.service';

@Module({
  modules: [DatabaseModule],
  controllers: [ContactsController],
  components: [ContactsService, ...contactsProviders]
})
export class ContactsModule {}
