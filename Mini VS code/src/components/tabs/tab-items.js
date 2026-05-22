export function TabItem(tab, active) {

  return `
    <div class="tab ${active ? 'active' : ''}">
      ${tab.name}
    </div>
  `;
}