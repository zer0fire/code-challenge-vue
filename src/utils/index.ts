import Dexie, { Table } from "dexie";

export interface ListItem {
  content: number;
}

export class DexieDB extends Dexie {
  list!: Table<ListItem>;

  constructor() {
    super("listDB");
    this.version(1).stores({
      list: "++id, name, age", // Primary key and indexed props
    });
  }
}

export function initDB() {
  const db = new DexieDB();
  return {
    getList: async function () {
      const res = await db.list.toArray();
      return res;
    },
    addItem: async function (list: ListItem) {
      db.list.add(list);
    },
  };
}
