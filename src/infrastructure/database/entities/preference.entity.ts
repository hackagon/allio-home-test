import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'preference' })
export class PreferenceEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  userId: number;

  @Property()
  symbol: string;

  @Property()
  notes: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(userId: number, symbol: string, notes: string) {
    this.userId = userId;
    this.symbol = symbol;
    this.notes = notes;
  }
}
