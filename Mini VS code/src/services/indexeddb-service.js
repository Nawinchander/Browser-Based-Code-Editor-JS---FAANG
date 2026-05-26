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


export async function saveFile(
  file
) {

  const db = await openDB();

  const tx =
    db.transaction(
      STORE_NAME,
      'readwrite'
    );

  tx.objectStore(STORE_NAME)
    .put(file);
}


export async function getFile(id) {

  const db = await openDB();

  return new Promise(resolve => {

    const tx =
      db.transaction(STORE_NAME);

    const request =
      tx.objectStore(STORE_NAME)
      .get(id);

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}