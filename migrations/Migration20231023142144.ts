import { Migration } from '@mikro-orm/migrations';

export class Migration20231023142144 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "preference" ("id" serial primary key, "user_id" int not null, "symbol" varchar(255) not null, "notes" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "preference" cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}
