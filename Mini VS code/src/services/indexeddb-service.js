const DB_NAME = 'mini-vscode';

const STORE_NAME = 'files';

export function openDB() {

  return new Promise((resolve) => {

    const request =
      indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {

      const db = request.result;

      db.createObjectStore(
        STORE_NAME,
        {
          keyPath: 'id'
        }
      );
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}