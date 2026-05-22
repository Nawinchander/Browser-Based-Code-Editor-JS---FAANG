export function renderTree(nodes) {

  return nodes.map(node => {

    // Folder
    if (node.type === 'folder') {

      return `
        <div class="folder">

          <div class="folder-name">
            📁 ${node.name}
          </div>

          <div class="folder-children">
            ${renderTree(node.children || [])}
          </div>

        </div>
      `;
    }

    // File
    return `
      <div class="file">
        📄 ${node.name}
      </div>
    `;
  }).join('');
}