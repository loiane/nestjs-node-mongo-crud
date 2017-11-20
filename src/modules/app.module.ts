import { Module } from '@nestjs/common';

import { ContactsModule } from './contacts/contacts.module';

@Module({
    modules: [ContactsModule],
})
export class ApplicationModule {}