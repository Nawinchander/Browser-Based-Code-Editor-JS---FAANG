class TrieNode {

  constructor() {
    this.children = {};
    this.end = false;
  }
}

export class Trie {

  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {

    let node = this.root;

    for (const char of word) {

      if (!node.children[char]) {
        node.children[char] =
          new TrieNode();
      }

      node = node.children[char];
    }

    node.end = true;
  }
}