import { Migration } from '@mikro-orm/migrations';

export class Migration20231022151128 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
