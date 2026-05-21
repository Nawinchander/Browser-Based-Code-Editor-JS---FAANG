export function render(vnode) {

  const el = document.createElement(vnode.type);

  for (const key in vnode.props) {
    el.setAttribute(key, vnode.props[key]);
  }

  vnode.children.forEach(child => {
    el.append(child);
  });

  return el;
}

