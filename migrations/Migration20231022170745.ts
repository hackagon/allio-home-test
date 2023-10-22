import { Migration } from '@mikro-orm/migrations';

export class Migration20231022170745 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "preference" ("id" serial primary key, "user_id" int not null, "symbol" varchar(255) not null, "notes" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('alter table "user" add column "created_at" timestamptz(0) not null, add column "updated_at" timestamptz(0) not null;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "preference" cascade;');

    this.addSql('alter table "user" drop column "created_at";');
    this.addSql('alter table "user" drop column "updated_at";');
  }

}
