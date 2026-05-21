import './styles/app.css';
import { highlight } from './core/tokenizer/highlight';

export function App() {
const editor = document.getElementById('editor');
const highlighted = document.getElementById('highlighted');

editor.addEventListener('input', () => {
  highlighted.innerHTML = highlight(editor.value);
});

  return `
    <div class="app">

      <aside class="sidebar">
        File Explorer
      </aside>

      <main class="editor-section">

        <header class="tabs">
          Tabs
        </header>

        <section class="editor-container">
          <textarea id="editor"></textarea>
        </section>

      </main>

    </div>
  `;
}