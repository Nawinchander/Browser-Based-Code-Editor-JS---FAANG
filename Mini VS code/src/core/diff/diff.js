export function diff(oldNode, newNode) {

  if (!oldNode) {
    return newNode;
  }

  if (oldNode.type !== newNode.type) {
    return newNode;
  }

  return oldNode;
}

