const { default: Dexie } = require("dexie");

export const dexieInstance = new Dexie("test_db");

dexieInstance.version(1).stores({
  tasks: "++id, description, state",
});
