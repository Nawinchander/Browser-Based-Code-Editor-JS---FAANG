// ex 

const index = {
  auth: ['file1', 'file2']
};


export function buildIndex(files) {

  const map = {};

  files.forEach(file => {

    const words = file.content.split(/\s+/);

    words.forEach(word => {

      if (!map[word]) {
        map[word] = [];
      }

      map[word].push(file.id);
    });
  });

  return map;
}


// Complexity

// Indexing:

// O(n)

// Search lookup:

// O(1)

// Regex search:

// O(n×m)



