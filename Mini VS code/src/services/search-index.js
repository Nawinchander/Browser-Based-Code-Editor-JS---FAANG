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

