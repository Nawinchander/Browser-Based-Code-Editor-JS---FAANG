export function CommandPalette(state) {

  if (!state.visible) return '';

  return `

    <div class="palette-overlay">

      <div class="palette">

        <input
          id="palette-input"
          placeholder="Type a command..."
        />

        <div class="results">

          ${state.filteredCommands
            .map(command => `

              <div
                class="command-item"
                data-command="${command.id}"
              >
                ${command.name}
              </div>

            `).join('')}

        </div>

      </div>

    </div>
  `;
}


