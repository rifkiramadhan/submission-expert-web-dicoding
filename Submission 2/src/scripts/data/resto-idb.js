import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openNearbyIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const NearbySource = {
  async getResto(id) {
    return (await openNearbyIdb).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await openNearbyIdb).getAll(OBJECT_STORE_NAME);
  },

  async putResto(resto) {
    return (await openNearbyIdb).put(OBJECT_STORE_NAME, resto);
  },

  async deleteResto(id) {
    return (await openNearbyIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default NearbySource;
