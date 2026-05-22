export function Tabs(state) {

  return `
    <div class="tabs">

      ${state.openTabs.map(tab => `

        <div
          class="
            tab
            ${state.activeTab === tab.id
              ? 'active'
              : ''
            }
          "

          data-id="${tab.id}"
        >

          ${tab.name}

          <button
            class="close-btn"
            data-close="${tab.id}"
          >
            ×
          </button>

        </div>

      `).join('')}

    </div>
  `;
}